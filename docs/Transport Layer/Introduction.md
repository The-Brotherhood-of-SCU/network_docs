# Introduction

- provide **logical communication** between application processes running on different hosts
- transport protocols run in **end systems**
- transport layer relies on, enhances network layer services

||transport layer|network layer|
|:----:|:----:|:----:|
|data transfer|between processes|between end systems|

## transport-layer protocols
**Internet transport services**
- **TCP**
  > reliable, in order unicast delivery
  - congestion control
  - flow control
  - connection setup
- **UDP**
  > unreliable("best-effort"), unordered unicast or multicast delivery
- services not available
  - real-time
  - bandwidth guarantees
  - reliable multicast