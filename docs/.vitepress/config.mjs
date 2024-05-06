import { defineConfig } from 'vitepress'

import mathjax3 from 'markdown-it-mathjax3';
import { withPwa } from '@vite-pwa/vitepress'

const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
  'mjx-container',
  'mjx-assistive-mml',
];

// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  pwa:{
    manifest: {
      name: 'Network Docs',
      short_name: 'Network',
      theme_color: '#ffffff',
      orientation: "any",
      start_url:".",
      icons:[
        {src:"/network_docs/android-chrome-192x192.png",sizes:"192x192",type:"image/png",purpose: "any"},
        {src:"/network_docs/android-chrome-512x512.png",sizes:"512x512",type:"image/png",purpose: "any"},
        {src:"/network_docs/apple-touch-icon.png",sizes:"180x180",type:"image/png",purpose: "any"},
        {src:"/network_docs/favicon-16x16.png",sizes:"16x16",type:"image/png"},
        {src:"/network_docs/favicon-32x32.png",sizes:"16x16",type:"image/png"},
      ]
    },
  },
  title: "Network Docs",
  base:"/network_docs/",
  description: "computer network course docs",
  icon:"/logo.png",
  lastUpdated: true,
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
  themeConfig: {
    logo:"logo.png",
    editLink: {
      pattern: 'https://github.com//The-Brotherhood-of-SCU/network_docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com//The-Brotherhood-of-SCU/network_docs' }
    ],

    sidebar: [
      {
        text: 'Application Layer',
        items: [
          {text:"Overview",link:"/Application Layer/Overview"},
          {text:"Principles of Application Layer Protocols",link:"/Application Layer/Principles of Application Layer Protocols"},
          {text:"DNS",link:"/Application Layer/DNS"},
          {text:"FTP",link:"/Application Layer/FTP protocol"},
          {text:"HTTP",link:"/Application Layer/HTTP protocol"},
          {text:"SMTP",link:"/Application Layer/SMTP protocol"},
        ]
      },
      {
        text: 'Transport Layer',
        items: [
          {text: 'Overview',link:"/Transport Layer/Overview"},
          {text:"Reliable Data Transport",link:"/Transport Layer/RDT"},
          {text:"User Datagram Protocol",link:"/Transport Layer/UDP"},
          {text:"Transmission Control Protocol",link:"/Transport Layer/TCP"},
        ]
      },
      {
        text: 'Network Layer',
        items: [

        ]
      },

      {
        text: 'About',
        items: [
          {text:"About The Doc",link:"about"}
        ]
      },
      

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com//The-Brotherhood-of-SCU/network_docs' }
    ]
  }
})
)