routes = [
  {
    path: '/',
    url: './pages/users.html',
  },
  {
    path: '/search/',
    componentUrl: './pages/search.html',
  },
  {
    path: '/users/',
    componentUrl: './pages/users.html',
  },

  {
    path: '/user/:id/',
    componentUrl: './pages/user-details.html',
  },
  {
    path: '/about/',
    url: './pages/about.html',
  },
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
