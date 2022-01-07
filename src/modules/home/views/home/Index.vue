<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld :msg="project.name" />
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState({
      project: (state) => state.home.project,
    }),
  },
}
</script>
