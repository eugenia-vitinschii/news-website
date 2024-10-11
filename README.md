$\color{#00bcd4}{\textsf{responsive news website}}$

![PINIA](https://img.shields.io/badge/PINIA-00bcd4?style=flat&logo=vuedotjs&logoColor=fff)
![VUE](https://img.shields.io/badge/Vue%20JS%203-00bcd4?style=flat&logo=vuedotjs&logoColor=fff)
![Axios](https://img.shields.io/badge/axios-00bcd4?style=flat&logo=axios&logoColor=fff)
![SASS](https://img.shields.io/badge/SASS-00bcd4?style=flat&logo=sass&logoColor=fff)
![HTML](https://img.shields.io/badge/HTML%205-00bcd4?style=flat&logo=html5&logoColor=fff)
 
News website short about:
*  Pinia store 
*  Axios
*  db.json data
*  News search (HomeView)
*  Sort news by category ( exlude HomeView)
*  change list to grid style for items views ( Category views)
*  router-link to view by category in item ( All views)
*  sass folders structure ( mixins, variables, )
*  sass style for text limit ( for all item news component)
*  sass style for hover a tags ( for all app)
*  sass grid ( for all app)



src
   - assets
      - sass
         - abstracts
         - components
         - core
         - layout
         - pages
         - sections
         app.sass
   - components
      - components
         - ...
      - core
         - TheArticleTitle.vue
         - ...
      - layout
         - TheHeaderr.vue
         - TheFooter.vue
      - sections
         - TheItem.vue
         - ...
   - router
      - index.js
   - stores
      - news.js
   - views
      - ...View.vue
      - ...View.vue
      - ...View.vue
   - App.vue
   main.js



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
###   \{^_^}/ hi!

###  Loading db.json
```
json-server -w db.json
```

