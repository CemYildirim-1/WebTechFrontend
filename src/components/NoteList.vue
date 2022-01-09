<template>
  <div class=" row row-cols-4" id="container">
    <div class="col m-5" v-for="notiz in notizenA" :key="notiz.id">
      <note-card :notiz="notiz" v-on:changeKey2="change()" ></note-card>
     </div>
    </div>
</template>

<script>
import NoteCard from '@/components/NoteCard'
export default {
  name: 'NotizenCardList',
  components: {
    NoteCard
  },
  data () {
    return {
      componentKey: 0,
      notizenA: []
    }
  },
  props: {
    notizen: {
      type: Array,
      required: true
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
        this.notizenA.push(notiz)
      }))
      .catch(error => console.log('error', error))
  },
  methods: {
    change () {
      this.$emit('changeKey1')
    }
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
