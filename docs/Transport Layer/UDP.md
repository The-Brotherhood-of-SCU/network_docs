# User Datagram Protocol(用户数据报协议)

## Feature
- **RFC 768**
- best effort
  - out of order
  - lost packet
- simple
  - no connection establishment
  - no states
  - smaller segment header
  - no congestion control

## header
8 bytes

|16bit|16bit|
|:---:|:---:|
|source port|dest port|
|length|checksum|

- length: in bytes of UDP segment, including header
- checksum
  > detect "errors"(e.g. flipped bits) in transmitted segment
  - **RFC 1071**
  - sender
    - treat segment contents as a sequence of 16-bit integer
    - checksum: addition(1's complement of the sum) of segment contents(16-bit words)
    - sender puts checksum value into UDP checksum field
  - receiver
    - compute the checksum of received segment
    - check if computed checksum equals checksum field value
      - true: no error detected. Pass.(no error nonetheless?)
      - false: error detected
## Used by
- Application Protocol
  - DNS
  - SNMP
- Streaming multimedia
- RDT at application layer 