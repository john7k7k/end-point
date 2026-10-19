import { randomUUID } from 'node:crypto';
// Shared by HTTP discovery and MQTT acknowledgements in this Node process.
export const backendInstanceId = randomUUID();
