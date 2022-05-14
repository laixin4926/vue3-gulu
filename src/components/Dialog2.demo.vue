<demo>
一键打开 Dialog
</demo>
<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
    closeOnClickOverlay参数为"false"，点击空白处不可以关闭对话框
  </div>
</template>
  
<script lang="ts">
import Button from "../lib/Button.vue";
import { ref, h } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "标题"),
        content: "你好",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return {
      showDialog,
    };
  },
};
</script>