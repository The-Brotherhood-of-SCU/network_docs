# Multiplexing/Demultiplexing

## Core
**Port Number**

## **segment**(数据段)
> unit of data exchanged between transport layer entities
- TPDU: transport protocol data unit

**segment**
- segment header
- application-layer data

## Multiplexing(多路复用)
> gathering data from multiple application processes, enveloping data with header(later used for demultiplexing)

## Demultiplexing(多路分解)
> delivering received segments to correct application layer processes

## multiplexing/demultiplexing
- based on sender, receiver port numbers, IP addresses
  - source, destination port in each segment
  - *well-known port numbers for specific applications*

- TCP/UDP segment format
  - **source port**(2 bytes)
  - **destination port**(2 bytes)
  - other header fields
  - application data(message)