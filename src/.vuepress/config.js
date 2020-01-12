
module.exports = {
  dest: '../docs',
  themeConfig: {
    logo: '/logo.jfif',
    sidebar: [
      "/",
      {
        title: 'API',
        collapsable: false, 
        path: '/api/token/',
        sidebarDepth: 2,
        children: [
          {
            collapsable: false,
            children: [
              '/api/token',
              '/api/orders',
              '/api/certificates',
            ]
          }
        ]
      }
    ]
  }
}