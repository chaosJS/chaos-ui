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
      size: '2'
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
