import{_ as e,c as t,o as l,a4 as o}from"./chunks/framework.BZ6o6c6C.js";const h=JSON.parse('{"title":"SMTP protocol","description":"","frontmatter":{},"headers":[],"relativePath":"Application Layer/SMTP protocol.md","filePath":"Application Layer/SMTP protocol.md","lastUpdated":1718164289000}'),r={name:"Application Layer/SMTP protocol.md"},s=o('<h1 id="smtp-protocol" tabindex="-1">SMTP protocol <a class="header-anchor" href="#smtp-protocol" aria-label="Permalink to &quot;SMTP protocol&quot;">​</a></h1><h2 id="simple-mail-transfer-protocol-简单邮件传输协议" tabindex="-1"><strong>Simple Mail Transfer Protocol(简单邮件传输协议)</strong> <a class="header-anchor" href="#simple-mail-transfer-protocol-简单邮件传输协议" aria-label="Permalink to &quot;**Simple Mail Transfer Protocol(简单邮件传输协议)**&quot;">​</a></h2><p>transport protocol - <strong>TCP</strong><br> SMTP - <strong>RFC 821</strong><br> port - <strong>25</strong></p><ul><li><strong>User Agent</strong><ul><li>composes, edits and reads mail messages</li><li>outgoes and incomes messages stored on server</li></ul></li><li><strong>Mail Server</strong><ul><li><strong>mailbox</strong>: contains incoming messages(yet to be read) for user</li><li><strong>message</strong>: queue of outgoing(to be sent) mail messages</li></ul></li><li>client/server model <ul><li>client: sending mail server</li><li>server: receiving mail server</li></ul></li></ul><h2 id="feature" tabindex="-1"><strong>Feature</strong> <a class="header-anchor" href="#feature" aria-label="Permalink to &quot;**Feature**&quot;">​</a></h2><ul><li><strong>direct</strong> transfer: sending server to receiving server</li><li>command/response interaction <ul><li>command: <strong>ASCII text</strong></li><li>response: <strong>status code and phrase</strong></li></ul></li><li><strong>messages must be in 7-bit ASCII</strong></li><li>certain character strings aren&#39;t permitted in message. Thus message has to be encoded.</li><li>SMTP server uses <strong>CRLF</strong><ul><li><strong>CRLF</strong> - determine the end of message</li></ul></li></ul><h3 id="comparsion" tabindex="-1"><strong>Comparsion</strong> <a class="header-anchor" href="#comparsion" aria-label="Permalink to &quot;**Comparsion**&quot;">​</a></h3><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">HTTP</th><th style="text-align:center;">SMTP</th></tr></thead><tbody><tr><td style="text-align:center;">operation</td><td style="text-align:center;">pull</td><td style="text-align:center;">push</td></tr><tr><td style="text-align:center;">object</td><td style="text-align:center;">each object is encapsulated in its own response message</td><td style="text-align:center;">multiple objects message sent in a multipart message</td></tr></tbody></table><h2 id="mail-message-format" tabindex="-1"><strong>Mail message format</strong> <a class="header-anchor" href="#mail-message-format" aria-label="Permalink to &quot;**Mail message format**&quot;">​</a></h2><ul><li><strong>RFC 822</strong></li><li>header lines <ul><li>To:</li><li>From:</li><li>Subject:</li></ul></li><li>body <ul><li>the message(ASCII only)</li></ul></li></ul><p>MIME types</p><ul><li><strong>Text</strong><ul><li>plain</li><li>html</li></ul></li><li><strong>Image</strong><ul><li>jpeg</li><li>gif</li></ul></li><li><strong>Audio</strong><ul><li>basic(8-bit mu-law encoded)</li><li>32kadpcm(32 kbps coding)</li></ul></li><li><strong>Video</strong><ul><li>mpeg</li><li>quicktime</li></ul></li><li><strong>Application</strong><ul><li>other data that must be processed by reader before &quot;viewable&quot;</li><li>example subtypes <ul><li>msword</li><li>octet-stream</li></ul></li></ul></li></ul><h2 id="mail-access-protocols" tabindex="-1"><strong>Mail access protocols</strong> <a class="header-anchor" href="#mail-access-protocols" aria-label="Permalink to &quot;**Mail access protocols**&quot;">​</a></h2><ul><li>SMTP: delivery/storage to receiver&#39;s server</li><li>Mail access protocol: <strong>retrival from server</strong><ul><li><strong>POP</strong>: Post Office Protocol(RFC 1939) <ul><li>authorization (agent&lt;=&gt;server) and download</li></ul></li><li><strong>IMAP</strong>: Internet Mail Access Protocol(RFC 1730) <ul><li>more features(more complex)</li><li>manipulation of stored msgs on server</li></ul></li><li>HTTP(Web-Based Email): Hotmail, Yahoo! Mail, etc.</li></ul></li></ul><h2 id="protocol-between-mail-server-user-pc" tabindex="-1">Protocol between mail server&amp;user pc <a class="header-anchor" href="#protocol-between-mail-server-user-pc" aria-label="Permalink to &quot;Protocol between mail server&amp;user pc&quot;">​</a></h2><p>pop3/IMAP</p>',16),i=[s];function a(n,c,g,m,u,d){return l(),t("div",null,i)}const b=e(r,[["render",a]]);export{h as __pageData,b as default};