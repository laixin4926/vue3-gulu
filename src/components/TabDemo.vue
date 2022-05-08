<template>
  <div>tabs示例</div>
  <h1>示例1</h1>
  <Tabs>
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script>
import Tab from "../lib/GuluTab.vue";
import Tabs from "../lib/GuluTabs.vue";

export default {
  components: { Tab, Tabs },
};
</script>

<style lang="scss" scoped>
</style>