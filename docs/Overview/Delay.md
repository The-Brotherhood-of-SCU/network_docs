# Delay & loss

## definition
| Symbol | Meaning |
|--------|---------|
| L      | packet length |
| R      | transmission rate |
| d      | distance |
| c      | speed of signal |


packet transmission delay $=\frac{L}{R}$
propagation delay $=\frac{d}{c}$
processing delay: 路由器处理数据包的时间(check bit error, determine output link)

## 输入比特率>输出比特率
当输入比特率>输出比特率时，路由器有两种策略：

1. queueing delay: 路由器在队列中等待被输出
2. loss: 路由器可能会丢弃一些数据包


总延迟($d_{\text{nodel}}$)=transmission+propgation+processing+queuing(opt.)

## 所有丢包的情况

1. TTL 为0 （这种情况会通过ICMP包通知发送端）
2. 路由器队列满了
3. 校验错误

eg. the width of a bit.10Mb/s ,prop $2\times 10^8m/s$


t=1/(10Mb/s)=$10^{-7}$
w=t*v=$10^{-7}\times 2\times 10^8=20m$

eg. R(bps),propagation delay t(s).total delay for one bit

$$
d_{\text{trans}}=\frac{1}{R}
$$
$\text{total } t=\frac{1}{R}+t$
注意不要一会算头一会算尾

**Note:** 如果在网络中间有一个路由器，路由器必须完整接受包再转发（store & forward）。
