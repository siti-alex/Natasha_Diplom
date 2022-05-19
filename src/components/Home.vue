<template lang="pug">
  div
    div.grey.lighten-3
      router-view
    v-footer(dark='' padless='' absolute)
      v-card.white--text.text-center(flat='' tile='' width='100%' color="#8b2639")
        v-card-text.pa-1
          v-btn.mx-4.white--text(v-for='icon in icons' icon='' :href='icon.href')
            v-icon
              | {{ icon.icon }}
        v-divider
        v-card-text.white--text
          | {{ new Date().getFullYear() }} —
          strong  Наташа
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      icons: [
        {
          icon: 'mdi-school',
          href: 'https://bgpu.ru/',
        },
      ],
    }),
    mounted() {
      if(this.$route.fullPath == '/'){
        setTimeout("location.href = '/news'", 100);
      }
    },
  }
</script>
