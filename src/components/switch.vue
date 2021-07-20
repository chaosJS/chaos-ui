<template>
  <div
    class="cs-switch"
    :class="{'is-checked':value}"
    @click="_handleClick"
    :for="name"
  >
    <span
      class="cs-switch__core"
      ref="core"
    >
      <span class="cs-switch__button"></span>
    </span>
    <input
      type="checkbox"
      class="cs-switch__input"
      :name="name"
      ref="input"
    >
  </div>
</template>

<script>
export default {
  name: 'CsSwitch',
  props: {
    value: {
      type: Boolean,
      defualt: true
    },
    activeColor: {
      type: String,
      defualt: ''
    },
    inactiveColor: {
      type: String,
      defualt: ''
    },
    name: {
      type: String,
      defualt: ''
    }
  },
  mounted () {
    this.$refs.input.checked = this.value
    this._setColor()
  },
  watch: {
    value: {
      handler () {
        this._setColor()
      },
      immediate: true
    }
  },
  methods: {
    _handleClick () {
      this.$emit('input', !this.value)
      this.$refs.input.checked = this.value
    },
    _setColor () {
      if (this.activeColor || this.inactiveColor) {
        if (this.$refs.core) {
          const color = !this.value ? this.activeColor : this.inactiveColor
          this.$refs.core.style.borderColor = color
          this.$refs.core.style.backgroundColor = color
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cs-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  &__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .cs-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  // checked style
  &.is-checked {
    .cs-switch__core {
      border-color: #409eff;
      background-color: #409eff;
      .cs-switch__button {
        transform: translateX(20px);
      }
    }
  }
}

// hide input
.cs-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>
