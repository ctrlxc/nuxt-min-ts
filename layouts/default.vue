<template>
  <div>
    <!-- <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="~assets/buefy/buefy.png" alt="Buefy" height="28">
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav> -->

    <nav
      class="navbar header has-shadow is-danger"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="~assets/buefy/buefy.png" alt="Buefy" height="28">
        </a>

        <div class="navbar-burger burger" data-target="navMenu" :class="{'is-active': isOpen}" @click="isOpen = !isOpen">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div id="navMenu" class="navbar-menu" :class="{'is-active': isOpen}">
        <div class="navbar-start">
          <nuxt-link class="navbar-link is-arrowless" to="/">
            Home
          </nuxt-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Misc
            </a>
            <div class="navbar-dropdown">
              <nuxt-link class="navbar-link is-arrowless" to="/other">
                Other
              </nuxt-link>
              <nuxt-link class="navbar-link is-arrowless" to="/test">
                Test
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <nuxt-link class="navbar-link is-arrowless" to="/signin">
            Sign in
          </nuxt-link>
          <nuxt-link class="navbar-link is-arrowless" to="/signup">
            Sign up
          </nuxt-link>
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          Main Menu
        </p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10 ">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Default extends Vue {
  items = [
    {
      title: 'Home',
      icon: 'home',
      to: { name: 'index' }
    },
    {
      title: 'Other',
      icon: 'lightbulb',
      to: { name: 'other' }
    }
  ]

  isOpen = false
}
</script>
