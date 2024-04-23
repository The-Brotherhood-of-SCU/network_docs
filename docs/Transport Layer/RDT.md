# Reliable Data Transport

## RDT1.0
Reliable transfer over a `reliable channel`
## RDT2.0
Reliable transfer over a `channel with bit error`

### Fatal Flaw
`ACK` `NAK` may be corrupted
### RDT2.1
Tag `ACK` `NAK` with flag `0` or `1`
### RDT2.2
a NAK-free Protocol

Tag packet with segment number (i++)

## RDT3.0
RDT over a `lossy channel with bit error`

### Strategy
- retransmit if no ACK received(timeout)

### Scenario
- if a packet just delayed not lost:
  - retransmission will be duplicated(solved by seq_number)

### Drawback
**Terrible Performance**

1Gbps link,15ms e-e prop.delay,1KB packet

$$
T_{transmit}=\frac{8\times 10^3 b/pkt}{1\times10^9b/s}=8\times 10^{-6}s
$$
$$
RTT=15ms\times 2=3\times 10^{-2}s
$$
1KB every ~30ms $\Rightarrow$ 33KB/s over a 1Gbps link
