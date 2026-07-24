#!/bin/bash

# Device API cURL 快速测试脚本
# 这个脚本提供快速的 HTTP API 测试方式

API_BASE="http://127.0.0.1:3000/api"
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Device API cURL 快速测试${NC}"
echo -e "${GREEN}========================================${NC}"

# 1. 创建用户
echo -e "\n${BLUE}1️⃣  创建测试用户...${NC}"
USER_RESPONSE=$(curl -s -X POST "${API_BASE}/users" \
  -H "Content-Type: application/json" \
  -d "{
    \"name\": \"cURL Test Device\",
    \"email\": \"curl-test-$(date +%s)@example.com\"
  }")

USER_ID=$(echo $USER_RESPONSE | grep -o '"_id":"[^"]*' | cut -d'"' -f4)
if [ -z "$USER_ID" ]; then
  echo -e "${RED}❌ 用户创建失败${NC}"
  echo $USER_RESPONSE
  exit 1
fi
echo -e "${GREEN}✅ 用户创建成功: $USER_ID${NC}"

# 2. Operation Start
echo -e "\n${BLUE}2️⃣  测试 Operation Start...${NC}"
START_TIME=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
START_RESPONSE=$(curl -s -X POST "${API_BASE}/device/operation/start" \
  -H "Content-Type: application/json" \
  -d "{
    \"userId\": \"$USER_ID\",
    \"startTime\": \"$START_TIME\"
  }")

echo -e "${YELLOW}请求:${NC}"
echo "POST ${API_BASE}/device/operation/start"
echo "{\"userId\": \"$USER_ID\", \"startTime\": \"$START_TIME\"}"

echo -e "\n${YELLOW}响应:${NC}"
echo $START_RESPONSE | jq . 2>/dev/null || echo $START_RESPONSE

OPERATION_ID=$(echo $START_RESPONSE | grep -o '"operationId":"[^"]*' | cut -d'"' -f4)
if [ -z "$OPERATION_ID" ]; then
  echo -e "${RED}❌ Operation Start 失败${NC}"
  exit 1
fi
echo -e "${GREEN}✅ Operation ID: $OPERATION_ID${NC}"

# 3. Get Operation
echo -e "\n${BLUE}3️⃣  查询 Operation 状态...${NC}"
GET_RESPONSE=$(curl -s -X GET "${API_BASE}/device/operation/${OPERATION_ID}" \
  -H "Content-Type: application/json")

echo -e "${YELLOW}响应:${NC}"
echo $GET_RESPONSE | jq . 2>/dev/null || echo $GET_RESPONSE

# 4. Operation End
echo -e "\n${BLUE}4️⃣  测试 Operation End...${NC}"
sleep 1
END_TIME=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
END_RESPONSE=$(curl -s -X POST "${API_BASE}/device/operation/end" \
  -H "Content-Type: application/json" \
  -d "{
    \"opID\": \"$OPERATION_ID\",
    \"endTime\": \"$END_TIME\",
    \"description\": \"cURL 测试操作完成\"
  }")

echo -e "${YELLOW}请求:${NC}"
echo "POST ${API_BASE}/device/operation/end"
echo "{\"opID\": \"$OPERATION_ID\", \"endTime\": \"$END_TIME\", \"description\": \"cURL 测试操作完成\"}"

echo -e "\n${YELLOW}响应:${NC}"
echo $END_RESPONSE | jq . 2>/dev/null || echo $END_RESPONSE
echo -e "${GREEN}✅ Operation End 完成${NC}"

# 5. 验证最终状态
echo -e "\n${BLUE}5️⃣  验证最终状态...${NC}"
FINAL_RESPONSE=$(curl -s -X GET "${API_BASE}/device/operation/${OPERATION_ID}" \
  -H "Content-Type: application/json")

echo -e "${YELLOW}最终状态:${NC}"
echo $FINAL_RESPONSE | jq . 2>/dev/null || echo $FINAL_RESPONSE

# 检查是否有 endTime
if echo $FINAL_RESPONSE | grep -q "endTime"; then
  echo -e "${GREEN}✅ 操作已正确结束${NC}"
else
  echo -e "${YELLOW}⚠️  未检测到 endTime${NC}"
fi

echo -e "\n${GREEN}========================================${NC}"
echo -e "${GREEN}✅ 测试完成！${NC}"
echo -e "${GREEN}========================================${NC}"
