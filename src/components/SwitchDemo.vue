<template>
  <div>
    <h1>Switch 组件示例</h1>
    <section class="second-title">
      <p>
        1.常规用法:使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量到<span>Switch</span>组件
      </p>
    </section>
    <Demo :component="Switch1Demo" />
    <section class="second-title">
      <p>
        1.支持disabled:在<span>switch</span>组件中添加<span>disabled</span>属性,以此来禁用<span>switch</span>组件
      </p>
    </section>
    <Demo :component="Switch2Demo" />
  </div>
</template>

<script lang="ts">
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Demo from "./Demo.vue";
import { ref } from "vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Switch1Demo,
      Switch2Demo,
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