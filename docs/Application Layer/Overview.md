# Application Layer



## Jargon(术语)

user agent: an interface between user & application
- browser
- mail reader
- media player

**Process**: a program that is running within a host

IPC: inter-process communication (defined by the OS)

client/server: 
- client
  - initiates contact(speak first)

## Interface

**Socket**

This is a interface between `application layer` & `transport layer`

## How to identify the other process
- IP address
- Port number

## What service do I need?
- Data loss
- Timing
- Bandwidth

## Common Protocols
|Protocol|Port|Details|
|:---:|:---:|:---|  
|[HTTP](#http)|80|-|
|FTP|21|attention:port 21 is for control connection|
|[SMTP](#smtp)|25||

### HTTP
stateless (keeping states is complex)

#### Request
::: info HTTP.GET(client2server)
``` html 
GET /xxxx/xxx.html HTTP/1.0
User-agent:Mozilla/4.0
Accept:text/html,image/gif,image/jpeg
Accept-language:fr
\n
```
:::

::: info HTTP.GET(Response)
``` html 
HTTP/1.0 200 OK
Date:Thu,06 Aug 1998 12:00:15 GMT
Server:Apache/1.3.0(Unix)
Last-Modified:Mon,22 Jun 1998
Content-Length:6821
Content-Type:text/html
\n
data
```
:::

#### Framework
- Web Caches(proxy server)
  - this is like CDN
- Cookie


### SMTP

simple mail transfer protocol