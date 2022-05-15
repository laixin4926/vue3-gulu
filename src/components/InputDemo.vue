<template>
  <div>
    <h1 class="first-title">Input 示例</h1>

    <section class="second-title">
      <p>
        1.支持value:vue3.0支持多个v-model指令,使用<span>v-model</span>绑定一个<span>String</span>类型的变量到<span>Input</span>组件,主要监测组件<span>input</span>与<span>change</span>事件并<span>value</span>值，再增加一个<span>modelValue</span>值监测组件焦点事件并更新<span>value</span>值。
      </p>
    </section>
    <Demo :component="InputValue"></Demo>
    <section class="second-title">
      <p>
        2.支持disabled:使用<span>disabled</span>属性改变<span>Input</span>组件的状态，以此<span>禁用Input</span>组件
      </p>
    </section>
    <Demo :component="InputDisabled"></Demo>

    <section class="second-title">
      <p>
        3.支持readonly:使用<span>readonly</span>属性改变<span>Input</span>组件的状态，以此<span>禁止Input</span>组件输入事件。
      </p>
    </section>
    <Demo :component="InputReadOnly"></Demo>
    <section class="second-title">
      <p>
        4.支持error:使用<span>error</span>属性改变<span>Input</span>组件的状态，以此<span>禁止Input</span>组件输入事件。
      </p>
    </section>
    <Demo :component="InputError"></Demo>
  </div>
</template>
<script lang="ts">
import Demo from "./Demo.vue";
import InputValue from "./Input1.demo.vue";
import InputError from "./Input2.demo.vue";
import InputDisabled from "./Input3.demo.vue";
import InputReadOnly from "./Input4.demo.vue";
export default {
  components: { Demo },
  setup() {
    return {
      InputValue,
      InputError,
      InputDisabled,
      InputReadOnly,
    };
  },
};
</script>
<style lang="scss" scoped>
.second-title {
  p {
    margin-top: 10px;
    font-size: 0.9em;
    span {
      font-weight: 700;
      color: #ff1f1f;
    }
  }
}
</style>