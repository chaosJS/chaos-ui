// all pkgs entry
// when Vue.use(), vue can call this install fn

import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Switch from './switch'
import Radio from './radio'
import RadioGroup from './radio-group'
import Checkbox from './checkbox'
import CheckboxGroup from './checkbox-group'
import Form from './form'
import FormItem from './form-item'
import './fonts/font.scss'
const components = [
  Button,
  Dialog,
  Input,
  Switch,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem
]
const install = (Vue) => {
  console.log('install all comps')
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
// if use Vue in script like <script scr='....vue.min.js'></script> then install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
