<template>
  <section class="section">
    <h1>Users Index</h1>
    <ul>
      <li v-for="(item, key) of users" :key="key">
        <user :user="item" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { IUser } from '~/components/User.vue'

@Component({
  components: {
    User: () => import('~/components/User.vue')
  }
})
export default class UsersIndex extends Vue {
    users: IUser[] = [
      {
        id: '2',
        firstName: 'otomo',
        lastName: 'katsuhiro',
        icon: 'github-circle'

      },
      {
        id: '4',
        firstName: 'otomo',
        lastName: 'kohei',
        icon: 'github-circle'
      }
    ]
}
</script>
