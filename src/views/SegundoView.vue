<script>
import Segundo from "../components/Segundo/Segundo.vue";

export default (await import('vue')).defineComponent({
    name: "SegundoView",
    components: {
        Segundo,
    },

});
</script>
<template>
    <Segundo />
</template>


<style scoped>
 h1 {
  background: red;
}
</style> 