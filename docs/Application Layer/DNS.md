# DNS
## **Domain Name System(域名系统)**

- **distributed database** implemented in hierarchy of many **name servers**
- **application-layer protocol** host, routers, name servers to communicate to resolve names(address/name translation)
  - NOTE: core Internet function implemented as **application-layer protocol**
  - complexity at network's "edge"

### **No centralized DNS**
- single point of failure
- traffic volume
- distant centralized database
- maintenance
- no server has all name-to-IP address mappings

### **local name servers**
- each ISP, company has local(default) name server
- host DNS query first goes to local name server

### **authoritative name server**
- for a host: stores that host‟s IP address, name
- can perform name/address translation for that host‟s name

### **Root name server**
- **contacted by local name server that can not resolve name**
- features
  - contacts authoritative name server if name mapping not known
  - gets mapping
  - returns mapping to local name server
- dozen root name servers worldwide

## **Query**
- **recursive query**
  - puts burden of name resolution on contacted name server
  - heavy load?
- **iterated query**
  - contacted server replies with name of server to contact
  - *I don‟t know this name, but ask this server*

caching and updating records
- once (any) name server learns mapping, it caches mapping
  - cache entries timeout(disappear) after some time
- update/notify mechanisms under design by IETF
  - **RFC 2136**

## **records**
- distributed database storing Resource Records(RR)
- RR format: **(name, value, type, ttl)**

|type|name|value|
|:----:|:----:|:----:|
|A|hostname|IP address|
|NS|domain|IP address of authoritative name server for this domain|
|CNAME|an alias name for some "canonical"(the real) name|canonical name|
|MX|what the hostname is associated with|hostname of mailserver|

## **DNS protocol**
> **query** and **reply** messages, both with the same message format
- header(12 bytes)
  - **identification**(2 bytes): uses the same for query, reply to query 
  - **flags**
    - query or reply
    - recursion desired
    - recursion available
    - reply is authoritative
  - number of questions
  - number of answer RRs
  - number of authority RRs
  - number of additional RRs
- body(**all parts are variable**)
  - questions: name, type fields for a query
  - answers: RRs in reponse to query
  - authority: records for authoritative servers
  - additional information: additional "helpful" info that may be used