<template lang="pug">
  v-app
    v-app-bar(app='', color="#8b2639", dark='' clipped-left='' style="opacity: 0.8" )
      img(src='@/assets/logo2.png' align='left', tag='span', style='cursor: pointer' @click="home")
      v-spacer
      v-toolbar-title Генератор новостей
    router-view
    //v-footer(dark='' padless='' style="opacity: 0.9" )
    //  v-card.white--text.text-center(flat='' tile='' width='100%' color="#8b2639")
    //    v-card-text.pa-1
    //      v-btn.mx-4.white--text(v-for='icon in icons' icon='' :href='icon.href')
    //        v-icon
    //          | {{ icon.icon }}
    //    v-divider
    //    v-card-text.white--text
    //      | {{ new Date().getFullYear() }} —
    //      strong  Ситиков Алексей
</template>

<script>
export default {

  data: () => ({
    icons: [
      {
        icon: 'mdi-vk',
        href: null,
      },
      {
        icon: 'mdi-instagram',
        href: null,
      },
      {
        icon: 'mdi-school',
        href: 'https://bgpu.ru/func/educational/codo.html',
      },
    ],
  }),
  methods: {
    home(){
      location.href = '/news';
    }
  },
}
</script>

<!--<style lang="scss">-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--}-->

<!--nav {-->
<!--  padding: 30px;-->

<!--  a {-->
<!--    font-weight: bold;-->
<!--    color: #2c3e50;-->

<!--    &.router-link-exact-active {-->
<!--      color: #42b983;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
