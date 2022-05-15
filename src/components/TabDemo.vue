<template>
  <h1>Tabs 示例</h1>
  <section class="second-title">
    <p>
      1.常规用法:使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量到<span>Tabs</span>组件,指定默认<span
        >Tab</span
      >
    </p>
  </section>
  <Demo :component="Tabs1Demo" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Tabs1Demo from "./Tab1.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Tabs1Demo,
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