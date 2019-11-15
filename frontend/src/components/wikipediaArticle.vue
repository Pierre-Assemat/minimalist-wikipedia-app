<template>
  <div id="wiki" v-if="summary">
    <h2>{{ summary.title }}</h2>
    <div class="wiki-content">
      <div id="left-column">
        <h3>Last drawing</h3>
        <img v-bind:src="img_url" width="300px">
      </div>
      <div id="right-column">
        <h3>{{ summary.description }}</h3>
        <div class="wiki-info">
          <img v-bind:src="summary.thumbnail.source" v-bind:width="summary.thumbnail.width">
          <p class="extract">{{ summary.extract }}</p>
        </div>
        <div>
          <h3>Related url</h3>
          <a v-bind:href="summary['content_urls'].desktop.page">{{ summary.title }} page</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'WikipediaArticle',
  data () {
    return {
      summary: null,
      img_url: null
    }
  },

  mounted () {
    axios.get('http://0.0.0.0:8000/wiki/summary/XKCD').then(response => {
      if (response.status === 200) {
        console.log(response.data)
        this.summary = response.data || null
      }
    })

    axios.get('http://0.0.0.0:8000/wiki/XKCD').then(response => {
      if (response.status === 200) {
        console.log(response.data)
        this.img_url = response.data || null
      }
    })
  }
}
</script>

<style scoped>

#wiki {
  display: flex;
  flex-direction: column;
}

.wiki-content {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap-reverse;
}

#left-column {
  padding: 20px;
}

#right-column {
  padding: 20px;
}

.wiki-info {
  display: flex;
  flex-flow: row wrap-reverse;
  justify-content: center;
}

.extract {
  max-width: 300px;
  margin: 20px;
}

</style>
