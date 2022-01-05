<template>
  <h5 align=left class="m-2">Übersicht Ihrer Notizen</h5>
  <div id="container">
    <div class="col" v-for="notiz in notizen" :key="notiz.id">
      <div class="card by-white text-black">
        <img class="card-img" src="../assets/notiz_1.png" alt="Card image">
        <div class="card-img-overlay">
          <div class="">
            <h5 class="card-title">Ihre {{ notiz.id}}</h5>
            <p class="card-text">{{notiz.entry}}</p>
            <p class="card-text">{{notiz.ldt}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="notiz in notizen" :key="notiz.id">
      <div class="card h-100">
        <img src="../assets/notiz_1.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Ihre {{ notiz.id}}. Notiz</h5>
          <p class="card-text">{{notiz.entry}}</p>
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
#container {
  height: 400px;
  width: 400px;
  position: relative;
}
</style>
