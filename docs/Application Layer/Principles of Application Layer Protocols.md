# Principles of Application Layer Protocols

## Network Application Architecture
- Application **communicating,distribute processes**
  - hosts in **"user spece"**
  - exchange messages to implement application
- Application-layer protocols
  - define messages exchanged by apps and actions taken
  - **user services provided by lower layer protocols**
  
## Processes Communicating
- Client
  - initiate contact with server (first)
  - typically requests service from server
- Server
  - provides requests service to client

## Application-layer protocols
- **defines interface between application and transport layer**
- **socket** -> Internet API
  - two processes commiunicate by sending data to socket and reading data from socket

## Services provided by Internet transport protocols
- **TCP**
  - **connection-oriented**: setup required between client and server
  - **reliable transport**: between sending and receiving process
  - **flow control**: sender won't overwhelm receiver
  - **congestion control**: throttle sender when network overloaded
  - **Not provided**: 
    > timing  
    > minimum bandwidth guarantees

- **UDP**
  - **lightweight**: unreliable data transfer between sending and receiving process
  - **Not provided**:
    > connection setup  
    > reliability  
    > flow control  
    > congestion control  
    > timing  
    > any bandwidth guarantee