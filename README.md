# chaos-ui

1. basic button. nothing special, should pay attention to style
2. dialog
   1. vue transition
   2. vue .self .sync v-slot
   3. vue-loader v-deep
3. input
   1. how to support v-model. `v-modal='data'` = `:value='data'`+ `@input='data=$event.target.value'`
   2. clearable show-password
4. switch
   1. switch color `watch`, `this.$refs`
5. radio and radio-group
   1. `provide / inject`. like provider and consumer in react
6. checkbox and checkbox-group
   1. just like `radio / radio-group`, but checkbox-group should get an array
7. form / form-item
8. package all components
   1. copy all `src/components` .vue and `src/assets` fonts file into `packages`. see `copy-to-pkgs.js`
   2. add `index.js` in `packages` to install all components
   3. extends `vue.config.js` , compile all `packages` file
   4. add `"lib": "node copy-to-pkgs.js && vue-cli-service build --target lib packages/index.js"` in package.json
9. publish in npm
   1. in `package.json` change `privete: false`
   2. no duplicate name in npm
