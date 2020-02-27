<template>
  <section class="section">
    <h1>User {{ id }}'s Page</h1>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  validate ({ params }: any): boolean {
    return /^\d+$/.test(params.id)
  }
})
export default class UserId extends Vue {
  get id (): string {
    return this.$route.params.id
  }
}
</script>
