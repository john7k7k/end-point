#!/usr/bin/env node
/**
 * HTTP 版本的 Device API 测试脚本
 * 用于测试 start、ack、end 三个功能
 */

import axios from "axios";

const API_BASE = "http://127.0.0.1:3000/api";

// 颜色输出
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  blue: "\x1b[34m",
  yellow: "\x1b[33m",
  red: "\x1b[31m"
};

function log(color, text) {
  console.log(`${color}${text}${colors.reset}`);
}

async function createUser() {
  try {
    log(colors.blue, "\n📝 创建测试用户...");
    const response = await axios.post(`${API_BASE}/users`, {
      name: "Test Device",
      email: `test-device-${Date.now()}@example.com`
    });
    const userId = response.data._id;
    log(colors.green, `✅ 用户创建成功: ${userId}`);
    return userId;
  } catch (err) {
    log(colors.red, `❌ 用户创建失败: ${err.response?.data?.error || err.message}`);
    throw err;
  }
}

async function testOperationStart(userId) {
  try {
    log(colors.blue, "\n🚀 测试 Operation Start...");
    const startTime = new Date().toISOString();
    const payload = {
      userId,
      startTime
    };

    log(colors.yellow, `请求: POST ${API_BASE}/device/operation/start`);
    log(colors.yellow, `Payload: ${JSON.stringify(payload, null, 2)}`);

    const response = await axios.post(`${API_BASE}/device/operation/start`, payload);

    log(colors.green, "✅ Operation Start 成功");
    log(colors.yellow, `返回: ${JSON.stringify(response.data, null, 2)}`);

    return response.data.operationId;
  } catch (err) {
    log(colors.red, `❌ Operation Start 失败: ${err.response?.data?.error || err.message}`);
    throw err;
  }
}

async function testGetOperation(opID) {
  try {
    log(colors.blue, "\n🔍 测试 Get Operation...");
    const response = await axios.get(`${API_BASE}/device/operation/${opID}`);

    log(colors.green, "✅ Get Operation 成功");
    log(colors.yellow, `返回: ${JSON.stringify(response.data, null, 2)}`);

    return response.data;
  } catch (err) {
    log(colors.red, `❌ Get Operation 失败: ${err.response?.data?.error || err.message}`);
    throw err;
  }
}

async function testOperationEnd(opID) {
  try {
    log(colors.blue, "\n🛑 测试 Operation End...");

    // 等待 1 秒后结束操作
    await new Promise(resolve => setTimeout(resolve, 1000));

    const endTime = new Date().toISOString();
    const payload = {
      opID,
      endTime,
      description: "Test operation completed successfully"
    };

    log(colors.yellow, `请求: POST ${API_BASE}/device/operation/end`);
    log(colors.yellow, `Payload: ${JSON.stringify(payload, null, 2)}`);

    const response = await axios.post(`${API_BASE}/device/operation/end`, payload);

    log(colors.green, "✅ Operation End 成功");
    log(colors.yellow, `返回: ${JSON.stringify(response.data, null, 2)}`);

    return response.data;
  } catch (err) {
    log(colors.red, `❌ Operation End 失败: ${err.response?.data?.error || err.message}`);
    throw err;
  }
}

async function runTests() {
  log(colors.green, "=" * 50);
  log(colors.green, "🧪 开始 Device API HTTP 测试");
  log(colors.green, "=" * 50);

  try {
    // 1. 创建用户
    const userId = await createUser();

    // 2. 测试 Operation Start
    const opID = await testOperationStart(userId);

    // 3. 查询 Operation
    await testGetOperation(opID);

    // 4. 测试 Operation End
    await testOperationEnd(opID);

    // 5. 验证最终状态
    log(colors.blue, "\n✨ 验证最终状态...");
    const finalOp = await testGetOperation(opID);

    if (finalOp.endTime) {
      log(colors.green, `✅ 操作已正确结束`);
      log(colors.green, `   开始时间: ${finalOp.startTime}`);
      log(colors.green, `   结束时间: ${finalOp.endTime}`);
    } else {
      log(colors.red, `❌ 操作状态异常 (未见到 endTime)`);
    }

    log(colors.green, "\n" + "=" * 50);
    log(colors.green, "✅ 所有测试完成！");
    log(colors.green, "=" * 50);

  } catch (err) {
    log(colors.red, "\n❌ 测试过程中出现错误");
    process.exit(1);
  }
}

runTests();
