# Transmission Control Protocol


## Feature
- connection-oriented

## Structure
TCP segment

### header
20 bytes


## Pipeline (sliding window)

### Go-Back-N (GBN)
the receiver doesn't need a buffer

Scenario
- out of order / packets gap
  - discard all the following packets
### Selective Repeat

the receiver need a buffer to store packets, 
### Resend
- timeout
- multiple not ACKed 