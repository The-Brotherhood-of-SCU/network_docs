# SMTP protocol
## **Simple Mail Transfer Protocol(简单邮件传输协议)**

transport protocol - **TCP**  
SMTP - **RFC 821**  
port - **25**

- **User Agent**
  - composes, edits and reads mail messages
  - outgoes and incomes messages stored on server
- **Mail Server**
  - **mailbox**: contains incoming messages(yet to be read) for user
  - **message**: queue of outgoing(to be sent) mail messages
- client/server model
  - client: sending mail server
  - server: receiving mail server

## **Feature**
- **direct** transfer: sending server to receiving server
- command/response interaction
  - command: **ASCII text**
  - response: **status code and phrase**
- **messages must be in 7-bit ASCII**
- certain character strings aren't permitted in message. Thus message has to be encoded.
- SMTP server uses **CRLF**
  - **CRLF** - determine the end of message

### **Comparsion**
||HTTP|SMTP|
|:----:|:----:|:----:|
|operation|pull|push|
|object|each object is encapsulated in its own response message|multiple objects message sent in a multipart message|

## **Mail message format**
- **RFC 822**
- header lines
  - To:
  - From:
  - Subject:
- body
  - the message(ASCII only)

MIME types
- **Text**
  - plain
  - html
- **Image**
  - jpeg
  - gif
- **Audio**
  - basic(8-bit mu-law encoded)
  - 32kadpcm(32 kbps coding)
- **Video**
  - mpeg
  - quicktime
- **Application**
  - other data that must be processed by reader before "viewable"
  - example subtypes
    - msword
    - octet-stream

## **Mail access protocols**
- SMTP: delivery/storage to receiver's server
- Mail access protocol: **retrival from server**
  - **POP**: Post Office Protocol(RFC 1939)
    - authorization (agent<=>server) and download
  - **IMAP**: Internet Mail Access Protocol(RFC 1730)
    - more features(more complex)
    - manipulation of stored msgs on server
  - HTTP(Web-Based Email): Hotmail, Yahoo! Mail, etc.

## Protocol between mail server&user pc
pop3/IMAP