# Reliable Data Transport

- sending side
  - rdt_send(data) -> packet
    > called from above(e.g. by application). Passed data to deliver to receiver upper layer
  - udt_send(packet)
    > called by RDT, to transfer packet over unrealiable channel to receiver
- receiving side
  - rdt_rcv() -> packet
    > called when packet arrives on receive-side of channel
  - deliver_data(packet) -> data
    > called by RDT to deliver data to upper layer

### **What to do**
- develop sender, receiver sides of reliable data transfer protocol
- consider only unidirectional data transfer
  - control information will flow on both directions
- Use **Finite State Machines(FSM)** to specify sender, receiver

## RDT1.0
Reliable transfer over a `reliable channel`
- underlying perfectly reliable channel
  - no bit errors
  - no loss of packets
- separate FSMs for sender, receiver
  - sender sends data into underlying channel
  - receiver reads data from underlying channel

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
