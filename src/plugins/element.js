import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'
// 导入弹框组件
// Message需要进行全局挂载

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 全局 每一个组件都可以访问弹框
Vue.prototype.$message = Message
