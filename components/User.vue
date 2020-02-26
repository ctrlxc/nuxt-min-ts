<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title has-text-grey">
          {{ fullName }}
        </p>
      </header>
      <div class="card-content">
        <div class="content has-text-centered">
          <b-icon :icon="user.icon" size="is-large" type="is-primary" />
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <span>
            <slot />
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

export interface IUser {
  firstName: string
  lastName: string
  icon: string
}

@Component
export default class User extends Vue {
  @Prop({ type: Object, required: true }) readonly user!: IUser

  get fullName (): string {
    return `${this.user.firstName} ${this.user.lastName}`
  }
}
</script>
