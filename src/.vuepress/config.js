// module.exports = {

//   themeConfig: {
//     sidebarDepth: 2,
//     sidebar: [
//       '/',
//       '/api/get-orders',
//       ['/api/create-order', 'Explicit link text']
//     ]
//   }
// }

module.exports = {
  themeConfig: {
    logo: '/assets/logo.jfif',
    base:'https://stangrincom.github.io/vector-docs',
    sidebar: [
      {
        title: 'RESTful API',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 2,    // optional, defaults to 1
        children: [
          {
            title: "Auth",
            collapsable: false,
            children: [
              '/api/auth/get-token'
            ]
          },
          {
            title: "Orders",
            collapsable: false,
            children: [
              '/api/orders/create-order',
              '/api/orders/get-orders',
            ]
          },
          {
            title: "Certificates",
            collapsable: false,
            children: [
              '/api/certificates/get-certificates',
            ]
          }
        ]
      }
    ]
  }
}