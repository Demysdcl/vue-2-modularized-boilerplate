export default [
  {
    path: '/shopping',
    name: 'Shopping',
    component: () =>
      import(/* webpackChunkName: "shopping" */ '../views/Shopping/Index.vue'),
  },
]
