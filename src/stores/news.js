import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3000";

export const useNewsStore = defineStore("newsId", {
  state: () => ({
    news: [],
    searchValue: ''
  }),
  getters: {
    getNews(state){
      return state.news
    },
    filteredNews: (state) => {
      //for input
      if(state.searchValue != '' && state.searchValue ){
        state.news = state.news.filter((item) => {
          return item.title
          .toUpperCase()
          .includes(state.searchValue.toUpperCase())
        })
      }
         return state.news

     
    },
    sortByPriority: (state) => {
      return state.news.sort ((a , b)=> a.source_priority > b.source_priority ? 1 : -1)
    },
    //get news  by ai_tag
    getNewsByCategory: (state) =>{
      return (tag) => state.news.filter((item) => item.ai_tag === tag)
    },
    getTopNews: (state) =>{
      return state.news.filter((item) => item.category === 'top')
    } 
  },
  actions: {
    async fetchNews() {
      // get news from db.json
      try {
        const response = await axios.get(`${baseUrl}/news`);
        this.news = response.data;
      } catch (error) {
        console.err("Get products error:", error);
      }
    },
    async fetchNewsById(id) {
      // get news from db.json by id
      try {
        const response = await axios.get(`${baseUrl}/news/${id}`);
        this.news = response.data;
      } catch (error) {
        console.error("Get product error:", error);
      }
    },
  },
});
