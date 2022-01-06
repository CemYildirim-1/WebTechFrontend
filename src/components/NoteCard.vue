<template>
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
</template>

<script>
export default {
  name: 'NoteCard',
  props: {
    notiz: {
      type: Object,
      required: true
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
  }
}
</script>

<style scoped>

</style>
