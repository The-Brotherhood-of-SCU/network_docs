module.exports = {
    title:"Computer Network Docs",
    themeConfig: {
      navbar: true,
      nav: [
        { text: 'Github', link: 'https://github.com/The-Brotherhood-of-SCU/network_docs' },
      ],
      sidebarDepth:2,
      sidebar:[
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
      ],
    }
  }