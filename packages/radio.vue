<template>
  <label
    class="cs-radio"
    :class="{'is-checked': label === model}"
  >
    <span class="cs-radio__input">
      <span class="cs-radio__inner"></span>
      <input
        type="radio"
        class="cs-radio__original"
        :name="name"
        :value="label"
        v-model="model"
      >
    </span>
    <span class="cs-radio__label">
      <slot>
        <!-- if no slot then put label in  slot-->
        {{label}}
      </slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'CsRadio',
  inject: {
    radioGroup: {
      // if not in <cs-radio-group></cs-radio-group>
      default: null
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      defualt: ''
    },
    value: null,
    name: {
      type: String,
      defualt: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isInGroup ? this.radioGroup.value : this.value
      },
      set (value) {
        this.isInGroup
          ? this.radioGroup.$emit('input', value)
          : this.$emit('input', value)
      }
    },
    isInGroup () {
      // is in radio-group
      return !!this.radioGroup
    }
  }
}
</script>

<style lang="scss" scoped>
.cs-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  &__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .cs-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .cs-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .cs-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.cs-radio.is-checked {
  .cs-radio__input {
    .cs-radio__inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .cs-radio__label {
    color: #409eff;
  }
}
</style>
