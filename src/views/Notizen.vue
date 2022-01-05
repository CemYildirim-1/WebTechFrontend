<template>
  <h5 align=left class="m-2">Übersicht Ihrer Notizen</h5>
  <div class="container-fluid">
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="notiz in notizen" :key="notiz.id">
      <div class="card h-100">
        <img src="../assets/notiz_1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Ihre {{ notiz.id}}. Notiz</h5>
          <p class="card-text">{{notiz.notiz}}</p>
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

<style scoped>

</style>
