<template>
  <div>
    Name: {{ fullName }}
    Message: {{ message }}
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

export interface User_ {
  firstName: string
  lastName: string
}

@Component
export default class User extends Vue {
  @Prop({ type: Object, required: true }) readonly user!: User_
  @Prop({ type: String, required: true }) readonly firstName!: string
  @Prop({ type: String, required: true }) readonly lastName!: string

  message: string = 'This is a message'

  get fullName (): string {
    return `${this.firstName} ${this.lastName}`
  }

  get fullName_ (): string {
    return `${this.user.firstName} ${this.user.lastName}`
  }
}
</script>
