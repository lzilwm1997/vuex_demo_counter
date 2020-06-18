<template>
  <div class="home">
    <Show />
  </div>
</template>

<script>
// @ is an alias to /src
import Show from "@/components/show.vue";

export default {
  name: "Home",
  components: {
    Show
  }
};
</script>
