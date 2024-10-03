import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const useNewsStore = defineStore("newsId", {
  state: () => ({
    news: [],
  }),
  getters: {
    //get news  by ai_tag
    getNewsByCategory: (state) =>{
      return (category) => state.news.filter((item) => item.ai_tag === category)
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
