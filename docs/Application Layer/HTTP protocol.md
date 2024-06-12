# HTTP Protocol
## **HyperText Transfer Protocol(超文本传送协议)**

client/server model
- client: **browser** that requests, receives and "displays" the web objects
- server: web server sends web objects in response to requests

transport protocol - **TCP**  
HTTP 1.0 - **RFC 1945**  
HTTP 1.1 - **RFC 2068**  
Port - **80**

## Distingulish
|HTTP 1.0|HTTP 1.1|
|:---:|:---:|
|a TCP tranmit one object|TCP transmit multiple objects|


## **Stateless**
> server maintains no information about past client requests

- Non-persistent
  - **HTTP/1.0**
  - server parses requests, responses, and close TCP connections
  - 2 RTTs(Round Trip Time) to fetch each object
  - slow start for each object transfer
- Persistent
 - default for **HTTP/1.1**
 - on same TCP connection(see as above)
 - client sends requests for all referenced objects as soon as it receives base HTML
 - **Fewer RTTs**
 - **Less slow start**

## **HTTP message format**
- **Request**
  - request line
    > method URL version
    - method
      |method|introduction|usage|
      |:----:|:----:|:----:|
      |GET|Requests a representation of the specified resource|only retrieves data|
      |HEAD|Asks for a response identical to a GET request, but without the response body|often retrieves the meta information of resource|
      |POST|Submits an entity to the specified resource|often causes a change in state or side effects on the server|
      |PUT|Replaces all current representations of the target resource with the request payload|often updates the resource that existed or provides new resource|
      |DELETE|Deletes the specified resource|deletes resource|
      |CONNECT|Establishes a tunnel to the server identified by the target resource|often for proxy servers|
      |OPTIONS|Describes the communication options for the target resource|requests for available options|
      |TRACE|Performs a message loop-back test along the path to the target resource|often for tests and diagnoses|
      |PATCH|Applies partial modifications to a resource|often for tests and diagnoses|
    - version
      |version|
      |:----:|
      |HTTP/1.0|
      |HTTP/1.1|
      |HTTP/2.0|
  - header line**s**(multiple lines formatted the same as below)
    > header field name:value  
    > header field name:value  
    > ...
    - header field name
      |header field name|introduction|
      |:----:|:----:|
      |Accept|Informs the server about the types of data that can be sent back|
      |Accept-Encoding|The encoding algorithm, usually a compression algorithm, that can be used on the resource sent back|
      |Accept-Language|Informs the server about the human language the server is expected to send back|
      |Connection|Controls whether the network connection stays open after the current transaction finishes|
      |Host|Specifies the domain name of the server (for virtual hosting), and (optionally) the TCP port number on which the server is listening|
      |Referer|The address of the previous web page from which a link to the currently requested page was followed|
      |User-Agent|Contains a characteristic string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent|
      |Cookie|Contains stored HTTP cookies previously sent by the server with the Set-Cookie header|
      |Cache-Control|Directives for caching mechanisms in both requests and responses|
  - extra carriage return and line feed
  - Entity body
    > data here......
- **Response**
  - status line
    > version status_code status_description
    - status codes
      |status code class|introduction|
      |:----:|:----:|
      |1xx|Informational responses|
      |2xx|Successful responses|
      |3xx|Redirection messages|
      |4xx|Client error responses|
      |5xx|Server error responses|

      |status code|description|
      |:----:|:----:|
      |100|Continue|
      |101|Switching Protocols|
      |200|OK :-)|
      |202|Accepted|
      |204|No Content|
      |205|Reset Content|
      |206|Partial Content|
      |301|Moved Permanently :-(|
      |302|Found|
      |304|Not Modified|
      |307|Temporary Redirect|
      |308|Permanent Redirect|
      |400|Bad Request|
      |403|Forbidden :-(|
      |404|Not Found :-(|
      |405|Method Not Allowed|
      |406|Not Acceptable|
      |500|Internal Server Error|
      |501|Not Implemented|
      |502|Bad Gateway|
      |505|HTTP Version Not Supported|
  - header line**s**(multiple lines formatted the same as below)
    > header field name:value  
    > header field name:value  
    > ...
    - header field name
      |header field name|introduction|
      |:----:|:----:|
      |Date|Contains the date and time at which the message was originated|
      |Content-Type|Indicates the media type of the resource|
      |Content-Length|The size of the resource, in decimal number of bytes|
      |Content-Encoding|Used to specify the compression algorithm|
      |Last-Modified|The last modification date of the resource, used to compare several versions of the same resource|
      |Set-Cookie|Send cookies from the server to the user-agent|
  - extra carriage return and line feed
  - data
    > data here...

## **Web Caches**
> satisfy client request without involving origin server

- **web accesses via web cache**
- client sends all http requests to web cache
  - If objects at web cache, web cache immediately returns the objects in http response
  - Else requests objects from the origin server, then returns http response to client
- Advantages
  - **smaller response time**
  - **decrease traffic to distant servers**