<template>
  <h1>IHRE NOTIZEN</h1>
  <div class="container-fluid">
    <notizen-card-list :notizen="this.notizen" v-on:changeKey1="forceRerender()" :key="componentKey" ></notizen-card-list>
  </div>
  <notizen-create-form v-on:changeKey="forceRerender()"></notizen-create-form>

</template>

<script>
import NotizenCardList from '@/components/NoteList'
import NotizenCreateForm from '@/components/NewNoteForm'

export default {
  name: 'Notizen',
  components: {
    NotizenCardList,
    NotizenCreateForm
  },
  data () {
    return {
      componentKey: 0,
      notizen: []
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
  },
  methods: {
    forceRerender () {
      this.componentKey += 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
