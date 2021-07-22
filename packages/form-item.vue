<template>
  <div class="cs-form-item">
    <label
      :style="labelStyle"
      class="cs-form-item__label"
    >
      {{label}}
    </label>
    <div class="cs-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CsFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['Form'],
  computed: {
    labelStyle () {
      return {
        width: this.Form.labelWidth
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cs-form-item {
  margin-bottom: 25px;
  &__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  &__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
