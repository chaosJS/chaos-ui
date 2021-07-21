<template>
  <label
    class="cs-checkbox"
    :class="{'is-checked':isChecked}"
  >
    <span class="cs-checkbox__input">
      <span class="cs-checkbox__inner"></span>
      <input
        type="checkbox"
        class="cs-checkbox__original"
        :name="name"
        v-model="model"
        :value="label"
      >
    </span>
    <span class="cs-checkbox__label">
      <slot>
        {{label}}
      </slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'CsCheckbox',
  inject: {
    checkboxGroup: {
      default: ''
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.checkboxGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.checkboxGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.checkboxGroup
    },
    isChecked () {
      // if in checkbox-group，check if label in model
      // if not in group, use model
      return this.isGroup ? this.model.includes(this.label) : this.model
    }
  }

}
</script>

<style lang="scss" scoped>
.cs-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: ncs;
  margin-right: 30px;
  &__input {
    white-space: nowrap;
    cursor: pointer;
    outline: ncs;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .cs-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s, cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #ffffff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .cs-checkbox__original {
      opacity: 0;
      outline: ncs;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .cs-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
// check style
.cs-checkbox.is-checked {
  .cs-checkbox__input {
    .cs-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .cs-checkbox__label {
    color: #409eff;
  }
}
</style>
