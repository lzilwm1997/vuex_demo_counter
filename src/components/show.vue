<template>
  <div class="hello">
    <div class="cop">
      <button @click="reduceHandle">- 1</button>
      <h1>{{ $store.state.count }}</h1>
      <button @click="addHandle">+ 1</button>
    </div>
    <div>
      <p>{{ showNum }}</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    addHandle() {
      this.$store.commit('increase')
    },
    ...mapMutations({
      reduceHandle: 'decrease'
    })
  },
  computed: {
    showNum() {
      return this.$store.getters.show
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 500px;
  .cop{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    margin: 0px 100px;
    padding: 10px 20px;
    font-size: 16px;
  }
  h1 {
    font-size: 20px;
  }
  p {
    display: block;
    margin-top: 30px;
    font-size: 20px;
  }
}
</style>
