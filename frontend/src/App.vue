<template>
  <div id="app">
    <h1>Minimalist wikipedia app</h1>
    <wikipediaArticle/>
  </div>
</template>

<script>
import WikipediaArticle from './components/wikipediaArticle'

export default {
  name: 'App',
  components: {
    WikipediaArticle
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
