# Introduction
This document is about MQTT communication for **End-point Loaction Technology** project. There are three ports in this document, they are server, UWB base station and device, respectively. 
All API payloads use **JSON format**. All string formats are described using **regular expressions**. The IP and port of broker are set to **192.168.123.113:1883** (LAN).

# Device API
## Topic : vision/operation/start
Publisher: Device
Subscriber: Server
QoS: 2

### Payload

| Field | Type  | Required | Description | Format
|---|---|---|------------------|------|
| userId | string | ✅ |The user ID | ^\[a-fA-F0-9]{24}$
| startTime | string | ✅ | The operation start time  |^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$

### Example
```
topic: vision/operation/start

{ 
    "userId": "699d92bec9f64dc1ecc349c2",
    "startTime": "2025-05-20T10:00:00Z"
}
```

### Explanation
The device publishes `vision/operation/start` to request the server to initiate a new operation session.
This message indicates that a user is starting an operation process.  
The `userId` uniquely identifies the user associated with the operation, and `startTime` represents the operation start time in UTC (ISO 8601 format).

## Topic : vision/operation/ack/{userId}
Publisher: Server
Subscriber: Device
QoS: 2

### Topic Parameter
| Field | Type  | Required | Description | Format
|---|---|---|------------------|------|
| userId | string | ✅ |The user ID | ^\[a-fA-F0-9]{24}$

### Payload

| Field | Type  | Required | Description | Format
|---|---|---|------------------|------|
| opID | string | ✅ |The operation ID | ^\[a-fA-F0-9]{24}$

### Example
```
topic: vision/operation/ack/699d92bec9f64dc1ecc349c2

{ 
    "opID": "699ad81b5b57fb73768b08bd"
}
```

### Explanation
After receiving the `vision/operation/start` message from the device, the server validates the request and creates a new operation session.  
If the request is accepted, the server publishes an acknowledgment message to this topic.
This message confirms that the operation has been successfully registered and provides an `opID`, which uniquely identifies the operation session.  
The device MUST store this `opID` and use it in all subsequent operation-related communications.
The `{userId}` topic parameter is used to route the acknowledgment message to the specific device that initiated the operation.

## Topic : vision/operation/end
Publisher: Device
Subscriber: Server
QoS: 2

### Payload

| Field | Type  | Required | Description | Format
|---|---|---|------------------|------|
| opID | string | ✅ |The operation ID | ^\[a-fA-F0-9]{24}$
| endTime | string | ✅ | The operation end time  |^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$
|description| string | | Max length is 200 char |

### Example
```
topic: vision/operation/end

{ 
    "opID": "699ad81b5b57fb73768b08bd",
    "endTime": "2025-05-21T10:00:00Z",
    "description": "Operation finish"
}
```

### Explanation
The device publishes `vision/operation/end` when the operation is completed.
This message notifies the server that the operation session identified by `opID` has finished.  
The server uses the provided `opID` to locate the corresponding operation record and updates its status to completed.
The `endTime` represents the actual completion time in UTC (ISO 8601 format).  
The optional `description` field can be used to provide additional information or remarks about the operation result.

# UWB Base Station API
## Topic : UWB/distance
Publisher: UWB base station
Subscriber: Server
QoS: 2

### Payload

| Field | Type  | Required | Description | Format
|---|---|---|------------------|------|
| stationNum | int | ✅ |The base station number | 1-8
| position | dict |  |For update position of base station | {x: int, y: int, z: int}

### Example
```

```

### Explanation


