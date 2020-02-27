<template>
  <section class="section">
    <button class="button is-medium" @click="toast">
      toast
    </button>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Other extends Vue {
  toast = () => {
    this.$buefy.toast.open('toast!')
  }
}
</script>
