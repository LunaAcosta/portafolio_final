<script >
import { RouterLink, RouterView } from 'vue-router';
import Navbar from "./components/Navbar/Navbar.vue";

export default (await import('vue')).defineComponent({
  components: {
    Navbar,
  }
})
</script>

<template>
  <Navbar/>
  <RouterView />
</template>
