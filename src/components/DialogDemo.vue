<template>
  <div>dialog示例</div>
  <div>示例1</div>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:content>
      <strong>h1</strong>
      <div>你好</div>
    </template>
    <template v-slot:title>
      <strong>加粗标题</strong>
    </template>
  </Dialog>
  <div>示例2</div>
  <Button @click="showDialog">show</Button>
</template>

<script lang =ts>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
import { ref } from "vue";
export default {
  components: { Dialog, Button, openDialog },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "你好",
        ok: () => {
          console.log("ok");
        },
        cancel: () => {
          console.log("cancel");
        },
      });
    };
    return { x, toggle, f1, f2, showDialog };
  },
};
</script>

<style lang="scss" scoped>
</style>