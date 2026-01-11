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

#### window size
suppose seq number is $n$ bit
$$
W_\text{Sender}+W_\text{Receiver}\leq 2^n, \text{where } W_\text{Sender}=1
$$
### Selective Repeat

the receiver need a buffer to store packets, 

#### window size
suppose seq number is $n$ bit
$$
W_\text{Sender}+W_\text{Receiver}\leq 2^n, \text{where } W_\text{Sender}=W_\text{Receiver}
$$

## flow control
防止缓冲区溢出

1. 建立连接时交换buffer大小
2. tcp头部包含free buffer space

## congestion control

TCP拥塞控制通过调整发送窗口大小来控制网络中的数据流量，避免网络拥塞。

### 拥塞窗口
- cwnd (congestion window): 发送方根据网络状况维护的窗口
- 发送窗口 = min(cwnd, 接收窗口rwnd)

#### 1. slow start
- 初始cwnd = 1 MSS
- 每收到一个ACK，cwnd增加1 MSS（即每次翻倍）
- cwnd呈指数增长：1, 2, 4, 8, 16, ...
- 当cwnd达到慢启动阈值ssthresh时，进入拥塞避免阶段

#### 2. congestion avoidance
- 每个RTT，cwnd增加1 MSS
- cwnd呈线性增长
- 检测到拥塞时：
  - ssthresh = cwnd / 2
  - cwnd = 1 MSS（如果是超时）
  - cwnd = ssthresh（如果是3个重复ACK，进入快速恢复）

#### Tahoe

3 duplicate ACKs trigger fast retransmit:
- ssthresh = cwnd / 2
- cwnd = 1
- 发送方立即重传丢失的报文段 & goto slow start


#### Reno

3 duplicate ACKs trigger fast retransmit:
- ssthresh = cwnd / 2
- cwnd = ssthresh
- 发送方立即重传丢失的报文段 & goto congestion avoidance
