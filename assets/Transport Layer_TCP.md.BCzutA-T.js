import{_ as e,c as a,o as t,a4 as r}from"./chunks/framework.BZ6o6c6C.js";const m=JSON.parse('{"title":"Transmission Control Protocol","description":"","frontmatter":{},"headers":[],"relativePath":"Transport Layer/TCP.md","filePath":"Transport Layer/TCP.md","lastUpdated":1718164289000}'),o={name:"Transport Layer/TCP.md"},i=r('<h1 id="transmission-control-protocol" tabindex="-1">Transmission Control Protocol <a class="header-anchor" href="#transmission-control-protocol" aria-label="Permalink to &quot;Transmission Control Protocol&quot;">​</a></h1><h2 id="feature" tabindex="-1">Feature <a class="header-anchor" href="#feature" aria-label="Permalink to &quot;Feature&quot;">​</a></h2><ul><li>connection-oriented</li></ul><h2 id="structure" tabindex="-1">Structure <a class="header-anchor" href="#structure" aria-label="Permalink to &quot;Structure&quot;">​</a></h2><p>TCP segment</p><h3 id="header" tabindex="-1">header <a class="header-anchor" href="#header" aria-label="Permalink to &quot;header&quot;">​</a></h3><p>20 bytes</p><h2 id="pipeline-sliding-window" tabindex="-1">Pipeline (sliding window) <a class="header-anchor" href="#pipeline-sliding-window" aria-label="Permalink to &quot;Pipeline (sliding window)&quot;">​</a></h2><h3 id="go-back-n-gbn" tabindex="-1">Go-Back-N (GBN) <a class="header-anchor" href="#go-back-n-gbn" aria-label="Permalink to &quot;Go-Back-N (GBN)&quot;">​</a></h3><p>the receiver doesn&#39;t need a buffer</p><p>Scenario</p><ul><li>out of order / packets gap <ul><li>discard all the following packets</li></ul></li></ul><h3 id="selective-repeat" tabindex="-1">Selective Repeat <a class="header-anchor" href="#selective-repeat" aria-label="Permalink to &quot;Selective Repeat&quot;">​</a></h3><p>the receiver need a buffer to store packets,</p><h3 id="resend" tabindex="-1">Resend <a class="header-anchor" href="#resend" aria-label="Permalink to &quot;Resend&quot;">​</a></h3><ul><li>timeout</li><li>multiple not ACKed</li></ul>',16),n=[i];function l(s,c,d,h,u,p){return t(),a("div",null,n)}const f=e(o,[["render",l]]);export{m as __pageData,f as default};