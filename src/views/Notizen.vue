<template>
  <h5 align=left class="m-2">Übersicht Ihrer Notizen</h5>
  <div class="row row-cols-1  row-cols-md-2 row-cols-md-3 row-cols-md-4" id="container">
    <div class="col" v-for="notiz in notizen" :key="notiz.id">
      <div class="card by-white text-black">
        <img class="card-img" :src="getPicture(notiz)" alt="Card image">
        <div class="card-img-overlay">
          <div class="">
            <h5 class="card-title">Ihre {{ notiz.id}} Notiz</h5>
            <p class="card-text">{{notiz.entry}}</p>
            <p class="card-text">{{notiz.ldt}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Notizen',
  data () {
    return {
      notizen: [
        {
          id: 1,
          ldt: '17.11.2021 15:45',
          entry: 'WEBTECH IST GENIAL!!!!!',
          colour: 'blue'
        },
        {
          id: 2,
          ldt: '20.11.2021 15:45',
          entry: 'Morgen muss ich für Webtech lernen, dann bald schreiben wir die Klausur',
          colour: 'green'
        },
        {
          id: 3,
          ldt: '20.12.2021 18:45',
          entry: 'Bald kommt der Weihnachtsmann :D',
          colour: 'lightBlue'
        },
        {
          id: 4,
          ldt: '01.01.2022 00:00',
          entry: 'Frohes neues !!!!! Dieses wird ein mega erfolgreiches Jahr, denn Erfolgt kommt von erfolgen',
          colour: 'yellow'
        },
        {
          id: 4,
          ldt: '01.01.2022 00:00',
          entry: 'Frohes neues !!!!! Dieses wird ein mega erfolgreiches Jahr, denn Erfolgt kommt von erfolgen',
          colour: 'blue'
        },
        {
          id: 4,
          ldt: '01.01.2022 00:00',
          entry: 'Frohes neues !!!!! Dieses wird ein mega erfolgreiches Jahr, denn Erfolgt kommt von erfolgen',
          colour: 'green'
        },
        {
          id: 4,
          ldt: '01.01.2022 00:00',
          entry: 'Frohes neues !!!!! Dieses wird ein mega erfolgreiches Jahr, denn Erfolgt kommt von erfolgen',
          colour: 'lightBlue'
        },
        {
          id: 4,
          ldt: '01.01.2022 00:00',
          entry: 'Frohes neues !!!!! Dieses wird ein mega erfolgreiches Jahr, denn Erfolgt kommt von erfolgen',
          colour: 'yellow'
        },
        {
          id: 4,
          ldt: '01.01.2022 00:00',
          entry: 'Frohes neues !!!!! Dieses wird ein mega erfolgreiches Jahr, denn Erfolgt kommt von erfolgen',
          colour: 'blue'
        },
        {
          id: 4,
          ldt: '01.01.2022 00:00',
          entry: 'Frohes neues !!!!! Dieses wird ein mega erfolgreiches Jahr, denn Erfolgt kommt von erfolgen',
          colour: 'green'
        }
      ]
    }
  },
  methods: {
    getPicture (notiz) {
      if (notiz.colour === 'blue') {
        return require('../assets/notiz_1.png')
      } else if (notiz.colour === 'green') {
        return require('../assets/notiz_2.png')
      } else if (notiz.colour === 'lightBlue') {
        return require('../assets/notiz_3.png')
      } else if (notiz.colour === 'yellow') {
        return require('../assets/notiz_4.png')
      }
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/notizen'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(notiz => {
        this.notizen.push(notiz)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
#container {
  height: 1400px;
  width: 1400px;
  position: relative;
}
</style>
