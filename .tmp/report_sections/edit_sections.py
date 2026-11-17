from pathlib import Path
import zipfile, copy, xml.etree.ElementTree as E

BASE=Path(__file__).resolve().parent
SRC=next(p for p in Path('D:/ncku/末端定位技術/報告').glob('*115.10.22*4DGWO驗證.pptx') if not p.name.startswith('~'))
DEST=SRC.with_name(SRC.stem+'_章節分頁版.pptx')
NS={'p':'http://schemas.openxmlformats.org/presentationml/2006/main','a':'http://schemas.openxmlformats.org/drawingml/2006/main','r':'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}
for k,v in NS.items(): E.register_namespace(k,v)
def q(k): a,b=k.split(':'); return '{'+NS[a]+'}'+b
def xml(r): return E.tostring(r,encoding='utf-8',xml_declaration=True)
with zipfile.ZipFile(SRC) as z: data={n:z.read(n) for n in z.namelist()}
original={k:v for k,v in data.items()}
template=E.fromstring(data['ppt/slides/slide2.xml'])
body=template.find('.//p:sp[p:nvSpPr/p:cNvPr]',NS) if False else list(template.findall('.//p:sp',NS))[1]
rows=[('系統流程與進度概述','4–5'),('同幀影像傳輸系統','7–19'),('傳輸系統模擬','21–31'),('定位演算法模擬','33–40'),('Future work','42–43')]

def textbox(parent,ident,x,y,w,h,text,size,color='000000',bold=False):
    sp=E.SubElement(parent,q('p:sp'))
    nv=E.SubElement(sp,q('p:nvSpPr')); E.SubElement(nv,q('p:cNvPr'),id=str(ident),name='章節 '+str(ident)); E.SubElement(nv,q('p:cNvSpPr'),txBox='1'); E.SubElement(nv,q('p:nvPr'))
    prop=E.SubElement(sp,q('p:spPr')); xf=E.SubElement(prop,q('a:xfrm'))
    E.SubElement(xf,q('a:off'),x=str(round(x*9525)),y=str(round(y*9525))); E.SubElement(xf,q('a:ext'),cx=str(round(w*9525)),cy=str(round(h*9525)))
    tx=E.SubElement(sp,q('p:txBody')); E.SubElement(tx,q('a:bodyPr'),wrap='none',lIns='0',rIns='0',tIns='0',bIns='0'); E.SubElement(tx,q('a:lstStyle'))
    para=E.SubElement(tx,q('a:p')); E.SubElement(para,q('a:pPr'))
    r=E.SubElement(para,q('a:r')); rp=E.SubElement(r,q('a:rPr'),lang='zh-TW',sz=str(size*100),b='1' if bold else '0')
    E.SubElement(E.SubElement(rp,q('a:solidFill')),q('a:srgbClr'),val=color)
    E.SubElement(rp,q('a:latin'),typeface='Times New Roman'); E.SubElement(rp,q('a:ea'),typeface='標楷體')
    E.SubElement(r,q('a:t')).text=text
    return sp

def outline(active=None):
    root=copy.deepcopy(template); tree=root.find('p:cSld/p:spTree',NS)
    tree.remove(list(tree.findall('p:sp',NS))[1])
    for i,(label,ran) in enumerate(rows):
        y=210+i*75
        col='B60000' if active==i else ('777777' if active is not None else '000000')
        textbox(tree,100+i*3,98,y,680,50,f'{i+1}.  {label}',26,col,active==i)
        textbox(tree,101+i*3,800,y+9,135,40,f'第 {ran} 頁',18,col,active==i)
        if i==3: textbox(tree,102+i*3,151,y+42,590,35,'(4D-GWO + RMV-FGO)',20,col,active==i)
    return root

data['ppt/slides/slide2.xml']=xml(outline())
pres=E.fromstring(data['ppt/presentation.xml']); lst=pres.find('p:sldIdLst',NS)
relpath='ppt/_rels/presentation.xml.rels'; rel=E.fromstring(data[relpath]); relns='http://schemas.openxmlformats.org/package/2006/relationships'
ct=E.fromstring(data['[Content_Types].xml']); ctns='http://schemas.openxmlformats.org/package/2006/content-types'
old=list(lst); new=[]; nextid=max(int(x.get('id')) for x in old)+1
starts={3:0,5:1,18:2,29:3,37:4}
for oldnum,item in enumerate(old,1):
    if oldnum in starts:
        chapter=starts[oldnum]; sn=40+chapter; rid=f'rIdChapter{sn}'
        data[f'ppt/slides/slide{sn}.xml']=xml(outline(chapter))
        rr=E.fromstring(data['ppt/slides/_rels/slide2.xml.rels'])
        for x in list(rr):
            if x.get('Type','').endswith('/notesSlide'): rr.remove(x)
        data[f'ppt/slides/_rels/slide{sn}.xml.rels']=xml(rr)
        E.SubElement(rel,'{'+relns+'}Relationship',Id=rid,Type=NS['r']+'/slide',Target=f'slides/slide{sn}.xml')
        E.SubElement(ct,'{'+ctns+'}Override',PartName=f'/ppt/slides/slide{sn}.xml',ContentType='application/vnd.openxmlformats-officedocument.presentationml.slide+xml')
        new.append(E.Element(q('p:sldId'),{'id':str(nextid),q('r:id'):rid})); nextid+=1
    new.append(item)
lst[:]=new
# Refresh cached slide-number fields, leaving all other source objects unchanged.
mapping={x.get('Id'):x.get('Target') for x in rel}
for page,item in enumerate(new,1):
    path='ppt/'+mapping[item.get(q('r:id'))]
    slide=E.fromstring(data[path]); changed=False
    for fld in slide.findall('.//a:fld',NS):
        if fld.get('type')=='slidenum':
            t=fld.find('a:t',NS)
            if t is not None: t.text=str(page); changed=True
    if changed:data[path]=xml(slide)
data['ppt/presentation.xml']=xml(pres); data[relpath]=xml(rel)
E.register_namespace('',ctns)
data['[Content_Types].xml']=xml(ct)
app='docProps/app.xml'
if app in data:
    ar=E.fromstring(data[app]); el=ar.find('{http://schemas.openxmlformats.org/officeDocument/2006/extended-properties}Slides')
    if el is not None:el.text='44'
    data[app]=xml(ar)
assert len(new)==44
with zipfile.ZipFile(DEST,'w',zipfile.ZIP_DEFLATED) as z:
    for name,content in data.items():z.writestr(name,content)
assert all(data[n]==v for n,v in original.items() if n.startswith(('ppt/media/','ppt/notesSlides/','ppt/charts/','ppt/embeddings/')))
print(DEST)
