<template lang="pug">
  div
    v-card.mx-auto(height='100%' width='80%' elevation="6" min-height='100vh' style="margin-top: 64px")
      v-divider
      v-card-title(style="margin-top: 20px").justify-center {{title}}
      v-divider
      v-sheet(width='90%' height='100%' v-html="text").mx-auto.mt-5.mb-5

      br
      //div(v-html="text")
      v-fab-transition()
        v-btn(dark='' fixed='' top='' left='' fab='' to="/news" color="#8b2639" style="margin-top: 70px; margin-left: 20px")
          v-icon mdi-arrow-left

    br
</template>

<script>
import axios from 'axios'
export default {
  name: "NewsId",
  data: () => ({
    text: null,
    title: null,
  }),
  methods: {

    getText(){
      const url = 'https://cms.lit.bgpu.ru/public/get/public/codo-site/olymp-courses/';
      axios.get(url).then(result => {
        console.log(result);
        this.text= result.data.htmlCode;
        this.title= result.data.title;
      })
    },
  },
  mounted() {
    //console.log(this.$route.params.id);
    this.getText();
  }
}
</script>

<style scoped>

</style>
