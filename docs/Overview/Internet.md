# Internet

##  Protocal
protocol ≈ format + order

## abbr.
RFC(互联网文件系列): Request for Comments
IETF（标准的制定者）: Internet Engineering Task Force
TP: twisted pair 双绞线
TTL：time to live 一个整数，最多能经过的跳数。（每经过一跳，该值减一）

## Network Edges(host)
1. end systems
2. access network(机构网络、家庭网络)
3. links(media:光纤 etc)

## Network Core(router)
1. packet switch(包交换，线路不定 store&forward)
2. circuit switch(路线固定)
3. network structure

between edge and core: edge router

## Delay
1. transportation delay
2. prop delay

## Layers
|Layer|Computer|packet name|
|----|----|---|
|Application| process|message
|Transport| TCP/UDP system kernel module|segment
|Network| IP system kernel module|datagram
|Link| driver + Network Interface Card |frame
|Physical| Network Interface Card|

## transmission rate

aka link capacity, link bandwidth 

指网卡将信息转换为物理信号的速率，将信息转化为01001物理信号的速率。一般是理论值。

一个链路层如下：
$$
\boxed{\text{Network Interface}}-\boxed{\text{Link}}-\boxed{{\text{Network Interface2}}}
$$

网卡会先在链路层上协商，使得双方的传输速率一致。

## throuhgout

吞吐量：单位时间内实际流过网络链路的数据量

## Service Model
client-server

