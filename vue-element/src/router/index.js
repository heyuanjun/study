import Vue from 'vue'
import Router from 'vue-router'
import Button from "../components/Button";
import Link from "../components/Link";
import Layout from "../components/Layout";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/link',
      name: 'Link',
      component: Link
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    }
  ]
})
