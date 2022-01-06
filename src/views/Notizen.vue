<template>
    <h1 align="left">Ihre Notizen</h1>
    <div class="container-fluid">
      <notizen-card-list :notizen="this.notizen"></notizen-card-list>
    </div>
    <notizen-create-form @created="addPerson"></notizen-create-form>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
