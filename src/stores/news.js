import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const useNewsStore = defineStore("newsId", {
   state: () => ({
      news: [],
   }),
   getters:{
      getNumber(){
         return this.news.length  
      },
      //filter by  "top" category 
      getTopCategory(){
         const result = this.news.filter((item) => item.category == 'top')
         return result 
      },
      //filer news about celebrety
      getCelebrityyNews(){
         const result = this.news.filter((item) => item.ai_tag == 'celebrity')
         return result 
      },
      //get news by sports
      getStortsNews(){
         const result = this.news.filter((item) => item.ai_tag == 'sports')
         return result 
      },
      // get news by politics
      getPoliticsNews(){
         const result = this.news.filter((item) => item.ai_tag == 'politics')
         return result 
      },
      // television
      getTelevisionNews(){
         const result = this.news.filter((item) => item.ai_tag == 'television')
         return result 
      },
      //cricket
      getCricketNews(){
         const result = this.news.filter((item) => item.ai_tag == 'cricket')
         return result 
      },
      
   },
   actions: {
      async fetchNews(){
         // get news from db.json
         try {
            const response = await axios.get(`${baseUrl}/news`);
            this.news= response.data;
         } catch(error) {
            console.err(error)
         }
      },
      async fetchNewsById(id){
      // get news from db.json by id
         try{
            const response = await axios.get(`${baseUrl}/news/${id}`);
            this.news = response.data;
            console.log('get product by id')
         } catch(error) {
            console.error( 'Get product error:' , error)
         }
      }
   }
})