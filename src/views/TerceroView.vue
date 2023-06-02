<script>
import Tercero from "../components/Tercero/Tercero.vue";

export default (await import('vue')).defineComponent({
    name: "TerceroView",
    components: {
        Tercero,
    },
});
</script>

<template>
    <Tercero />
</template>