<template>
  <div>
    <div>button</div>
    <h1>button示例</h1>
    <div>
      <Button>你好</Button>
      <Button theme="button">你好</Button>
      <Button theme="link">你好</Button>
      <Button theme="text">你好</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  setup() {
    const onClick = () => {
      console.log("hi");
    };

    return { onClick };
  },
  components: { Button },
};
</script>

<style lang="scss" scoped>
</style>