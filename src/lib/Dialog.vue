<template>
  <div class="dialog-overlay"></div>
  <div class="dialog-wrapper"></div>
  <header>标题</header>
  <main>
    <p>1</p>
    <p>2</p>
  </main>
  <footer>
    <Button>OK</Button>
    <Button>Cancel</Button>
  </footer>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  components: { Button },
};
</script>

<style lang="scss">
</style>