# Ethernet

# Frame Structure


|Preamble|Dest addr|SRC addr|Type|Data|CRC|
|:---:|:---:|:---:|:---:|:---:|:---:|

- Preamble: 8 bytes
- addr: 6bytes(MAC addr)
- type: indicate higher protocol
- CRC: error check


# CSMA/CD


## exponential Backoff

1. first collision:  $K \in \{0,1\}$
2. after second collision: $K \in \{0,1,2,3,...\}$
3. after 10 or more:$K \in \{0,1,2,...,10,16,32,64,...,1024\}$