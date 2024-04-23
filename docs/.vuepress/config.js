module.exports = {
    title:"Computer Network Docs",
    base:"/network_docs/",
    themeConfig: {
      repo: 'https://github.com/The-Brotherhood-of-SCU/network_docs',
      editLinks: true,
      docsBranch: 'main',
      docsDir: 'docs',
      repoLabel: 'Github',


      lastUpdated: 'Last Updated', // string | boolean
      navbar: true,
      nav: [
        {
          text: 'Layers',
          ariaLabel: 'Layers Menu',
          items: [
            { text: 'Application', link: '/Application Layer/' },
            { text: 'Transport', link: '/Transport Layer/' },
            { text: 'Network', link: '/Network Layer/' },
          ]
        }

      ],
      sidebarDepth:2,
      sidebar:[
        {
          title: 'Application Layer',   // 必要的
          path: '/Application Layer/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
          ]
        },
        {
          title: 'Transport Layer',   // 必要的
          path: '/Transport Layer/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            '/Transport Layer/Reliable Data Transport',
            '/Transport Layer/TCP',
            '/Transport Layer/UDP',
          ]
        },
        {
          title: 'Network Layer',   // 必要的
          path: '/Network Layer/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
          ]
        },
      ],
    }
  }