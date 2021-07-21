<template>
  <div id="app">chaos-ui
    <cs-button @click='(e)=>{
      handleClick(222,e)
      }'>123</cs-button>
    <cs-button type='primary'>123</cs-button>
    <cs-button type='success'>123</cs-button>
    <cs-button type='info'>plain</cs-button>
    <cs-button
      type='warning'
      disabled
    >123</cs-button>
    <cs-button
      type='danger'
      icon='cs-icon-zhinanzhen'
    >123</cs-button>
    <cs-button plain>朴素按钮</cs-button>
    <cs-button
      type='primary'
      plain
    >朴素按钮 primary</cs-button>
    <hr>
    <!-- <cs-dialog title='温馨提示'></cs-dialog> -->
    <cs-dialog
      width='60%'
      top='100px'
      :visible.sync="visible"
    >
      <!-- .sync is a  syntactic sugar, and  in child comp we must emit a func in update:propname  -->
      <!-- <template slot="title"> -->
      <template v-slot:title>
        <h4>123</h4>
      </template>
      <div>body content</div>
      <template v-slot:footer>
        <cs-button
          type='primary'
          @click="visible = false"
        >close</cs-button>

      </template>
    </cs-dialog>
    <cs-button
      plain
      @click="showDialog"
    >show dialog</cs-button>
    <hr>
    <cs-input
      v-model="username"
      clearable
      type='password'
      show-password
      style="width:200px"
    ></cs-input>
    <cs-input
      :value="username"
      @input="(value)=>{
        username=value
      }"
    ></cs-input>
    <hr>
    <cs-switch
      v-model="isNeed"
      name='needHelp'
      active-color='red'
      inactive-color='green'
    ></cs-switch>

    <cs-radio
      v-model="size"
      label='1'
    >Big</cs-radio>
    <cs-radio
      v-model="size"
      label='2'
    ></cs-radio>
    <cs-radio
      v-model="size"
      label='3'
    >Small</cs-radio>
    <cs-radio-group v-model="gender">
      <cs-radio label='1'>male</cs-radio>
      <cs-radio label='0'>female</cs-radio>
    </cs-radio-group>

    <hr>
    <cs-checkbox
      v-model="checkboxActive"
      label="is-selected"
    ></cs-checkbox>

    <cs-checkbox-group v-model="fruit">
      <cs-checkbox label="apple"></cs-checkbox>
      <cs-checkbox label="orange"></cs-checkbox>
      <cs-checkbox label="banana"></cs-checkbox>
    </cs-checkbox-group>
    <hr>
    <cs-form
      :model="formModel"
      label-width="150px"
    >
      <cs-form-item label="username">
        <cs-input
          v-model="formModel.username"
          clearable
          placeholder="please input username"
        ></cs-input>
      </cs-form-item>

      <cs-form-item label="switch active">
        <cs-switch v-model="formModel.active"></cs-switch>
      </cs-form-item>
    </cs-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      username: '',
      isNeed: true,
      // radio
      size: '2',
      gender: '1',
      // checkbox
      checkboxActive: true,
      fruit: [
        'apple',
        'orange',
        'banana'
      ],
      // form
      formModel: {
        username: '',
        active: true
      }

    }
  },
  methods: {
    handleClick (d, e) {
      console.log(123, d, e)
    },
    showDialog () {
      this.visible = true
    }

  }
}
</script>

<style lang="scss"></style>
