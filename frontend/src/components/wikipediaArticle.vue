<template>
  <div id="wiki" v-if="summary">
    <h2>{{ summary.title }}</h2>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'WikipediaArticle',
  data () {
    return {
      summary: null
    }
  },

  mounted () {
    axios.get('http://0.0.0.0:8000/wiki/summary/XKCD').then(response => {
      if (response.status === 200) {
        console.log(response.data)
        this.summary = response.data || null
      }
    })
  }
}
</script>

<style scoped>

#wiki {
  max-width: 800px;  
}

</style>
