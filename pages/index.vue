<template>
  <div>
    <h1>Hello world!</h1>
    <user first-name="a" last-name="b">
      ab san
    </user>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { User_ } from '~/components/User.vue'

@Component({
  components: {
    User: () => import('~/components/User.vue')
  }
})
export default class HomePage extends Vue {
    users = (): User_ => ({
      firstName: 'a',
      lastName: 'b'
    })
}
</script>
