<template>
  <h1>dialog示例</h1>
  <section class="second-title">
    <p>
      1.常规用法:使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量到<span>Dialog</span>组件
    </p>
  </section>
  <Demo :component="Dialog1Demo" />
  <section class="second-title">
    <p>
      2.利用TS打开
      Dialog:引入<span>openDialog</span>模块创建一个<span>Dialog</span>组件
    </p>
  </section>
  <Demo :component="Dialog2Demo" />
</template>

<script lang =ts>
import Demo from "./Demo.vue";
import Dialog1Demo from "./Dialog1.demo.vue";
import Dialog2Demo from "./Dialog2.demo.vue";
export default {
  components: { Demo },
  setup() {
    return { Dialog1Demo, Dialog2Demo };
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