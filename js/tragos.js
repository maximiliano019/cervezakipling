const { createApp } = Vue  //creo un objeto VUE llamdo createApp

  createApp({
    data() {
      return {
        url:'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z',
        drinks:[]
      } 
    },   
    methods: {
      fetchData(url) {

          fetch(url)
              .then(response => response.json())
              .then(data => { 
                  this.drinks=data.drinks
                  console.log(this.drinks)
              })

      }
  },
    created(){

      this.fetchData(this.url) 
    }

    
  }).mount('#grillaJson')
