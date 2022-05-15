<template>
  <div>
    <h1>Button 示例</h1>
    <section class="second-title">
      <p>
        1.支持 theme:使用<span>theme</span>属性改变<span>Button</span>组件的类别
      </p>
    </section>
    <Demo :component="Button1Demo" />
    <section class="second-title">
      <p>
        2.支持 size:使用<span>size</span>属性改变<span>Button</span>组件的大小
      </p>
    </section>
    <Demo :component="Button2Demo" />
    <section class="second-title">
      <p>
        3.支持level:使用<span>level</span>属性改变<span>Button</span>组件的颜色，以此突显<span>Button</span>组件的重要等级
      </p>
    </section>
    <Demo :component="Button3Demo" />
    <section class="second-title">
      <p>
        4.支持
        disabled:使用<span>disabled</span>属性改变<span>Button</span>组件的状态，以此<span>禁止点击Button</span>组件
      </p>
    </section>
    <Demo :component="Button4Demo" />
    <section class="second-title">
      <p>
        5.支持
        loading:使用<span>loading</span>属性表示<span>Button</span>组件正在加载
      </p>
    </section>
    <Demo :component="Button5Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
export default {
  setup() {
    const onClick = () => {
      console.log("hi");
    };

    return { Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo };
  },
  components: { Demo },
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