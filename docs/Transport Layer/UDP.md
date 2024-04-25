# User Datagram Protocol

## Feature

  - best effort
    - out of order
    - lost packet
  - simple
    - no connection establishment
    - no states
    - smaller segment header
    - no congestion control

## header
|16bit|16bit|
|:---:|:---:|
|source port|dest port|
|length|checksum|

## Used by
- Application Protocol
  - DNS
  - SNMP
- Streaming multimedia
- RDT at application layer 