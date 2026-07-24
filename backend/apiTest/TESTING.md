# Device API 测试指南

这个目录包含了 Device API 的两个版本的测试脚本：HTTP 和 MQTT。

## 📋 API 规格概览

### 1. Operation Start (启动操作)
- **HTTP**: `POST /api/device/operation/start`
- **MQTT**: Publish to `vision/operation/start`

**Payload:**
```json
{
  "userId": "699d92bec9f64dc1ecc349c2",
  "startTime": "2025-05-20T10:00:00Z"
}
```

### 2. Operation Ack (服务器确认)
- **MQTT**: Server publishes to `vision/operation/ack/{userId}`

**Payload:**
```json
{
  "opID": "699ad81b5b57fb73768b08bd"
}
```

### 3. Operation End (结束操作)
- **HTTP**: `POST /api/device/operation/end`
- **MQTT**: Publish to `vision/operation/end`

**Payload:**
```json
{
  "opID": "699ad81b5b57fb73768b08bd",
  "endTime": "2025-05-21T10:00:00Z",
  "description": "Operation finish"
}
```

## 🚀 使用步骤

### 前置要求
```bash
# 1. 确保 MongoDB 正在运行
mongod

# 2. 确保 MQTT Broker 正在运行（用于 MQTT 测试）
# 默认连接到 mqtt://127.0.0.1:1883

# 3. 安装依赖
npm install
```

### HTTP 测试

```bash
# 在 Backend 目录下
cd d:/ncku/末端定位技術/code/backend

# 启动 Backend 服务
npm run dev

# 在另一个终端运行 HTTP 测试
node apiTest/test-http.js
```

**测试流程：**
1. ✅ 创建测试用户
2. ✅ 发送 Operation Start 请求
3. ✅ 查询 Operation 状态
4. ✅ 发送 Operation End 请求
5. ✅ 验证最终状态

**预期输出：**
```
==================================================
🧪 开始 Device API HTTP 测试
==================================================

📝 创建测试用户...
✅ 用户创建成功: 66f8a4c5d3e2b1a0c9f8e7d6

🚀 测试 Operation Start...
请求: POST http://127.0.0.1:3000/api/device/operation/start
Payload: {
  "userId": "66f8a4c5d3e2b1a0c9f8e7d6",
  "startTime": "2025-05-20T10:30:45.123Z"
}
✅ Operation Start 成功
返回: {
  "message": "Operation started",
  "operationId": "66f8a4c5d3e2b1a0c9f8e7d7",
  "userId": "66f8a4c5d3e2b1a0c9f8e7d6",
  "startTime": "2025-05-20T10:30:45.123Z"
}
...
```

### MQTT 测试

```bash
# 在 Backend 目录下
cd d:/ncku/末端定位技術/code/backend

# 启动 Backend 服务
npm run dev

# 在另一个终端运行 MQTT 测试
node apiTest/test-mqtt.js
```

**测试流程：**
1. ✅ 连接到 MQTT Broker
2. ✅ 创建测试用户
3. ✅ 发布 Operation Start 消息
4. ✅ 等待并接收 ACK 消息
5. ✅ 发布 Operation End 消息
6. ✅ 验证最终状态

**预期输出：**
```
============================================================
🧪 开始 Device API MQTT 测试
============================================================

✅ MQTT 已连接
📡 已订阅: vision/operation/ack/66f8a4c5d3e2b1a0c9f8e7d6

📝 创建测试用户...
✅ 用户创建成功: 66f8a4c5d3e2b1a0c9f8e7d6

🚀 测试 MQTT Operation Start...
发布到: vision/operation/start
Payload: {
  "userId": "66f8a4c5d3e2b1a0c9f8e7d6",
  "startTime": "2025-05-20T10:35:00.000Z"
}
✅ 消息已发布

📨 收到 MQTT 消息: vision/operation/ack/66f8a4c5d3e2b1a0c9f8e7d6
   {
     "opID": "66f8a4c5d3e2b1a0c9f8e7d7"
   }
✅ 收到 ACK，Operation ID: 66f8a4c5d3e2b1a0c9f8e7d7
...
```

## 📊 测试结果验证

两个测试脚本都会：
1. 创建一个新的 Operation
2. 验证服务器响应
3. 查询 Operation 的最终状态
4. 检查 endTime 字段是否正确设置

## 🔍 故障排除

### MQTT 连接错误
```
❌ MQTT 连接错误: connect ECONNREFUSED 127.0.0.1:1883
```
**解决方案：** 确保 MQTT Broker 运行在 127.0.0.1:1883

### 用户不存在错误
```
❌ User not found: xxx
```
**解决方案：** 检查用户 ID 是否正确，可能需要先创建用户

### Operation 不存在错误
```
❌ Operation not found: xxx
```
**解决方案：** 确保 Operation ID 正确，检查 MongoDB 连接

## 📝 API 响应格式

### 成功响应 (HTTP)
```json
{
  "message": "Operation started",
  "operationId": "66f8a4c5d3e2b1a0c9f8e7d7",
  "userId": "66f8a4c5d3e2b1a0c9f8e7d6",
  "startTime": "2025-05-20T10:00:00Z"
}
```

### 错误响应
```json
{
  "error": "Missing required fields: userId or startTime"
}
```

## 🎯 测试覆盖范围

| 功能 | HTTP | MQTT |
|------|------|------|
| Operation Start | ✅ | ✅ |
| Operation Ack | ✅ | ✅ |
| Operation End | ✅ | ✅ |
| 数据验证 | ✅ | ✅ |
| 错误处理 | ✅ | ✅ |
| 状态验证 | ✅ | ✅ |

## 📦 文件清单

- `test-http.js` - HTTP 版本的测试脚本
- `test-mqtt.js` - MQTT 版本的测试脚本
- `README.md` - 此文档

## 🔗 相关文件

- Backend: `src/controllers/deviceController.js`
- Backend: `src/routes/deviceRoutes.js`
- Backend: `src/mqtt/mqttClient.js`
- API 规格: `api.md`

## 💡 提示

- 每次运行测试都会创建一个新的用户，避免重复数据
- MQTT 测试自动订阅 ACK 主题并等待响应
- HTTP 测试速度更快，适合快速验证
- MQTT 测试更接近实际设备使用场景
