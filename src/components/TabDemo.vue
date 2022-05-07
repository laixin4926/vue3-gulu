<template>
  <div>tabs示例</div>
  <h1>示例1</h1>
  <Tabs>
    <Tab title="导航1"></Tab>
    <Tab title="导航2"></Tab>
  </Tabs>
</template>

<script>
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";

export default {
  components: { Tab, Tabs },
};
</script>

<style lang="scss" scoped>
</style>