import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Network Docs",
  base:"/network_docs/",
  description: "computer network course docs",
  lastUpdated: true,
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
        ]
      },
      {
        text: 'Network Layer',
        items: [

        ]
      },
      {
        text: 'Transport Layer',
        items: [
          {text:"Reliable Data Transport",link:"/Transport Layer/RDT"},
          {text:"User Datagram Protocol",link:"/Transport Layer/UDP"},
          {text:"Transmission Control Protocol",link:"/Transport Layer/TCP"},
        ]
      },
      {text:"About",link:"about"}

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com//The-Brotherhood-of-SCU/network_docs' }
    ]
  }
})
