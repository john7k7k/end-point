#!/usr/bin/env node
/**
 * MQTT 版本的 Device API 测试脚本
 * 用于测试 start、ack、end 三个功能
 */

import mqtt from "mqtt";
import axios from "axios";

const MQTT_BROKER = "mqtt://127.0.0.1:1883";
const API_BASE = "http://127.0.0.1:3000/api";

// 颜色输出
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  blue: "\x1b[34m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m"
};

function log(color, text) {
  console.log(`${color}${text}${colors.reset}`);
}

class DeviceAPITester {
  constructor() {
    this.client = null;
    this.receivedAck = false;
    this.operationId = null;
    this.userId = null;
  }

  async connectMQTT() {
    return new Promise((resolve, reject) => {
      this.client = mqtt.connect(MQTT_BROKER);

      this.client.on("connect", () => {
        log(colors.green, "✅ MQTT 已连接");
        resolve();
      });

      this.client.on("error", (err) => {
        log(colors.red, `❌ MQTT 连接错误: ${err.message}`);
        reject(err);
      });

      this.client.on("message", (topic, message) => {
        this.handleMessage(topic, message);
      });

      setTimeout(() => {
        reject(new Error("MQTT connection timeout"));
      }, 5000);
    });
  }

  handleMessage(topic, message) {
    const data = JSON.parse(message.toString());
    log(colors.cyan, `📨 收到 MQTT 消息: ${topic}`);
    log(colors.yellow, `   ${JSON.stringify(data, null, 2)}`);

    // 检查是否是 ack 消息
    if (topic.startsWith("vision/operation/ack/")) {
      if (data.opID) {
        this.receivedAck = true;
        this.operationId = data.opID;
        log(colors.green, `✅ 收到 ACK，Operation ID: ${data.opID}`);
      }
    }
  }

  async createUser() {
    try {
      log(colors.blue, "\n📝 创建测试用户...");
      const response = await axios.post(`${API_BASE}/users`, {
        name: "MQTT Test Device",
        email: `mqtt-device-${Date.now()}@example.com`
      });
      this.userId = response.data._id;
      log(colors.green, `✅ 用户创建成功: ${this.userId}`);
      return this.userId;
    } catch (err) {
      log(colors.red, `❌ 用户创建失败: ${err.response?.data?.error || err.message}`);
      throw err;
    }
  }

  async testOperationStart() {
    try {
      log(colors.blue, "\n🚀 测试 MQTT Operation Start...");

      // 订阅 ACK 主题
      const ackTopic = `vision/operation/ack/${this.userId}`;
      this.client.subscribe(ackTopic, { qos: 2 }, (err) => {
        if (err) {
          log(colors.red, `❌ 订阅失败: ${ackTopic}`);
        } else {
          log(colors.yellow, `📡 已订阅: ${ackTopic}`);
        }
      });

      const startTime = new Date().toISOString();
      const payload = {
        userId: this.userId,
        startTime
      };

      log(colors.yellow, `发布到: vision/operation/start`);
      log(colors.yellow, `Payload: ${JSON.stringify(payload, null, 2)}`);

      this.client.publish("vision/operation/start", JSON.stringify(payload), { qos: 2 }, (err) => {
        if (err) {
          log(colors.red, `❌ 发布失败: ${err.message}`);
        } else {
          log(colors.green, `✅ 消息已发布`);
        }
      });

      // 等待 ACK (最多 3 秒)
      await new Promise(resolve => setTimeout(resolve, 3000));

      if (!this.receivedAck || !this.operationId) {
        log(colors.red, `❌ 未收到 ACK 或未获取到 Operation ID`);
        throw new Error("No ACK received");
      }

      log(colors.green, `✅ Operation Start 测试完成，Operation ID: ${this.operationId}`);
      return this.operationId;
    } catch (err) {
      log(colors.red, `❌ Operation Start 测试失败: ${err.message}`);
      throw err;
    }
  }

  async testOperationEnd(opID) {
    try {
      log(colors.blue, "\n🛑 测试 MQTT Operation End...");

      // 等待 1 秒后结束操作
      await new Promise(resolve => setTimeout(resolve, 1000));

      const endTime = new Date().toISOString();
      const payload = {
        opID,
        endTime,
        description: "MQTT test operation completed"
      };

      log(colors.yellow, `发布到: vision/operation/end`);
      log(colors.yellow, `Payload: ${JSON.stringify(payload, null, 2)}`);

      this.client.publish("vision/operation/end", JSON.stringify(payload), { qos: 2 }, (err) => {
        if (err) {
          log(colors.red, `❌ 发布失败: ${err.message}`);
        } else {
          log(colors.green, `✅ 消息已发布`);
        }
      });

      // 等待处理
      await new Promise(resolve => setTimeout(resolve, 1000));

      log(colors.green, `✅ Operation End 测试完成`);
    } catch (err) {
      log(colors.red, `❌ Operation End 测试失败: ${err.message}`);
      throw err;
    }
  }

  async verifyOperation(opID) {
    try {
      log(colors.blue, "\n✨ 验证操作状态...");

      const response = await axios.get(`${API_BASE}/device/operation/${opID}`);
      const op = response.data;

      log(colors.yellow, `返回数据:`);
      log(colors.yellow, `${JSON.stringify(op, null, 2)}`);

      if (op.endTime) {
        log(colors.green, `✅ 操作已正确结束`);
        log(colors.green, `   开始时间: ${op.startTime}`);
        log(colors.green, `   结束时间: ${op.endTime}`);
        log(colors.green, `   描述: ${op.description}`);
      } else {
        log(colors.red, `⚠️  操作状态异常 (未见到 endTime)`);
      }
    } catch (err) {
      log(colors.red, `❌ 验证失败: ${err.response?.data?.error || err.message}`);
      throw err;
    }
  }

  disconnect() {
    if (this.client) {
      this.client.end();
      log(colors.green, "✅ MQTT 已断开连接");
    }
  }

  async runTests() {
    log(colors.green, "=".repeat(60));
    log(colors.green, "🧪 开始 Device API MQTT 测试");
    log(colors.green, "=".repeat(60));

    try {
      // 连接 MQTT
      await this.connectMQTT();

      // 创建用户
      await this.createUser();

      // 测试 Operation Start
      const opID = await this.testOperationStart();

      // 测试 Operation End
      await this.testOperationEnd(opID);

      // 验证最终状态
      await this.verifyOperation(opID);

      log(colors.green, "\n" + "=".repeat(60));
      log(colors.green, "✅ 所有 MQTT 测试完成！");
      log(colors.green, "=".repeat(60));

    } catch (err) {
      log(colors.red, `\n❌ MQTT 测试失败: ${err.message}`);
      process.exit(1);
    } finally {
      this.disconnect();
    }
  }
}

// 运行测试
const tester = new DeviceAPITester();
tester.runTests().then(() => {
  process.exit(0);
}).catch(() => {
  process.exit(1);
});
