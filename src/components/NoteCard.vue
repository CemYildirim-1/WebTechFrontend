<template>
      <div class="card by-white text-black border-0">
        <img class="card-img" :src="getPicture(notiz)" alt="Card image">
        <div class="card-img-overlay">
          <div class="">
            <h5 class="card-title">Ihre {{ notiz.id}} Notiz</h5>
            <p class="card-text">{{notiz.entry}}</p>
            <p class="card-text">{{notiz.ldt}}</p>
            <i class="bi bi-journal-x m-2"  @click="deleteNote(notiz)"></i>
            <change-note-modal :notiz="notiz" v-on:changeKey3="change()" ></change-note-modal>
          </div>
        </div>
      </div>
</template>

<script>

import ChangeNoteModal from './ChangeNoteModal'

export default {
  name: 'NoteCard',
  components: {
    ChangeNoteModal
  },
  props: {
    notiz: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      notizen: []
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
    },
    deleteNote (notiz) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/notizen/' + notiz.id
      const headers = new Headers()
      const requestOptions = {
        method: 'DELETE',
        headers: headers,
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))
      setTimeout(() => { this.$emit('changeKey2') }, 250)
    },
    change () {
      this.$emit('changeKey2')
    }
  }
}
</script>

<style scoped>

</style>
