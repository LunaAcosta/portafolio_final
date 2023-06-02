<script >
import Portada from "../components/Portada/Portada.vue";

export default (await import('vue')).defineComponent({
    components: {
        Portada,
    },
});

</script>
<template>
    <Portada />
</template>
