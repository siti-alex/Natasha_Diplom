<template lang="pug">
  div
    v-card.mx-auto(height='100%' width='80%' elevation="6" min-height='100%' style="padding-top: 20px; padding-bottom: 200px; margin-top: 64px")
      //v-btn(color='primary' fab='' x-small='').float-lg-right.mx-5.mt-5
        v-icon mdi-plus
      v-card-title.justify-center Редактирование новостей
        v-spacer
        v-btn(color='#a25161' small='' dark='' right='' tile='' @click="showNews").ml-5 Добавить
          v-icon mdi-comment-plus-outline
      v-divider
      v-row
        //v-col(v-for='n in 8' cols='4')
        v-col(v-for='newses in news' :key="newses.id" cols='4')
          v-card( height='100%' ).mx-5
            v-img.white--text.align-end(height='200px' src="https://www.amurobl.ru/upload/iblock/5e2/image_21_08_20_02_41_5.jpeg")  <!-- add public in path mapping -->
              v-card-title {{newses.title}}
            v-card-subtitle.pb-0
              | {{newses.date}}
            v-card-text.text--primary
              div {{newses.text}}
            v-divider
            v-card-actions
              //v-btn(text='' color='deep-purple accent-4' @click='showChangeNews(news.indexOf(newses))')
              v-btn(text='' color='deep-purple accent-4' @click='showChangeNews(); idNews = newses')
                | Изменить
              //v-btn(text='' color='red darken-4' @click="deleteNews(newses.indexOf(news))")
              v-spacer
              v-btn(text='' color='red darken-4' @click="dialog = true; idNews = newses")
                | Удалить
            //change-news(ref="ChangeNews" :NewsSrc="newses" @update = "getAllNews")

      v-row(justify='center')
        v-dialog(v-model='dialog' persistent='' max-width='40%')
          template(v-slot:activator='{ on, attrs }')
          v-card
            v-card-title.headline
              | Новость будет удалена
            v-card-text
              | Вы уверены?
            v-card-actions
              v-spacer
              v-btn(color='primary' text='' @click='dialog = false')
                | Отмена
              v-btn(color="red darken-4" text='' @click='dialog = false; remove(idNews)')
                | Удалить
    add-news(ref="AddNews" @insertNews='addNews')
    change-news(ref="ChangeNews" :NewsSrc="idNews" @insertNews='changeNews')
</template>

<script>
import AddNews from "./AddNews";
import ChangeNews from "./ChangeNews";
export default {
  name: "EditNews",
  components: {ChangeNews, AddNews},
  data: () => ({
    news: [
    ],
    dialog: false,
    idNews: null

  }),
  methods: {
    test(){
      console.log(this.news);
    },
    remove(id){
      console.log(this.news.indexOf(id));
      this.news.splice(this.news.indexOf(id),1);
    },
    addNews(post){
      console.log(post);
      this.news.push(post);
    },
    changeNews(post){
      this.news.splice(this.news.includes(post),1,post)
    },
    showNews(){
      this.$refs.AddNews.showDialog();
    },
    showChangeNews(){
      this.$refs.ChangeNews.showDialog();
    }
  },
  mounted() {
    for(let i = 1; i<=10; i++){
      let obj = {title: this.$root.title, date: `${i}.05.2022`, id: i, text: this.$root.text, fullText: this.$root.fullText}
      this.news.push(obj)
    }
  }
}
</script>

<style scoped>

</style>
