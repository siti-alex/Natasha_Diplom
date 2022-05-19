<template lang="pug">
  v-container(fluid='', fill-height='')
    v-layout(align-center='', justify-center='')
      v-flex(xs12='', sm8='', md6='')
        h1(align="center") Страница не найдена
          br
          v-btn(text='' block='' @click="home") вернуться на главную

</template>

<script>
export default {
  name: "NotFound",
  mounted() {
    setTimeout("location.href = '/news'", 5000);
  },
  methods: {
    home(){
      location.href = '/news';
    },
  },
}
</script>

<style scoped>

</style>
