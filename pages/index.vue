<template>
  <section class="section">
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
export default class Index extends Vue {
    users: IUser[] = [
      {
        id: '1',
        firstName: 'pablo',
        lastName: 'picasso',
        icon: 'github-circle'

      },
      {
        id: 'abc',
        firstName: 'lefthand',
        lastName: 'ellen',
        icon: 'github-circle'
      }
    ]
}
</script>
