/**
 * Author      :ories
 * Create_Date :2020-07-07 23:28
 * Description :
 * IDE         :WebStorm
 *
 */
import Vue from 'vue'
import VueApp from './vue-app'

new Vue({
  render: h=>h(VueApp)
}).$mount(document.getElementById('root'))
