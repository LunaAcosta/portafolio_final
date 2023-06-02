<script>
import Primero from "../components/Primero/Primero.vue";

export default (await import('vue')).defineComponent({
  name: "PrimeroView",
  components: {
    Primero,
  },
});
</script>

<template>
  <Primero />
</template>