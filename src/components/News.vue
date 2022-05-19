<template lang="pug">
  div
    v-card.mx-auto(height='100%' width='80%' elevation="6" min-height='100%' style="margin-top: 64px; padding-bottom: 200px; padding-top: 20px")
      v-card-title().justify-center Лента новостей
      v-divider
      v-row
        v-col(v-for='newses in news' :key='newses.id' cols='4')
          v-card(tile='' height='100%' hover='' @click="" :to="{name: 'NewsId', params: { id: newses.id}}").mx-5.custom
            v-img.white--text.align-end(height='200px' src="https://www.amurobl.ru/upload/iblock/5e2/image_21_08_20_02_41_5.jpeg")
              v-card-title(style="background-color: #180000; opacity: 0.8; padding: 7px;")
                div.ml-2 {{newses.title}}
            v-card-subtitle.pb-0
              | {{newses.date}}
            v-card-text().subtitle-2
              | {{newses.text}}

            router-link(:to="{name: 'NewsId', params: { id: newses.id}}")

    br
</template>

<script>
export default {
  name: "News",
  data: () => ({
    news: [
    ]

  }),
  methods: {
    test(){

    }
  },
  mounted() {
    for(let i = 1; i<=10; i++){
      let obj = {title: 'Добро пожаловать', date: `${i}.05.2022`, id: i, text: 'Тестовая запись'}
      this.news.push(obj)
    }
  }

}
</script>

<style scoped>

</style>
