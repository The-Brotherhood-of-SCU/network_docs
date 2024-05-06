# FTP Protocol
## **File Transfer Protocol(文件传输协议)**

client/server model
- client: initiates transfer(to/from remote)
- server: remote host
  - maintains "state": current directory, earlier authentication, stateful

transport protocol - **TCP**  
FTP - **RFC 959**
Port - **21**

## **Two parallel TCP connections**
- Control: exchange commands, responses between client and server (**out of band control**)
- Data: file data to/from server

|command|parameter|usage|
|:----:|:----:|:----:|
|USER|username||
|PASS|password||
|LIST||return list of file in current directory|
|RETR|filename|retrieves(gets) file|
|STOR|filename|stores(puts) file onto remote host|

|status code|introduction|
|:----:|:----:|
|331|Username OK, password required|
|125|data connection already open, transfer starting|
|425|can’t open data connection|
|452|error writing file|