<template>
  <div id="container">
    <div class="card by-white text-black">
      <img class="card-img" src="../assets/notiz_1.png" alt="Card image">
      <div class="card-img-overlay">
        <div class="">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
#container {
  height: 400px;
  width: 400px;
  position: relative;
}
#image {
  position: absolute;
  left: 0;
  top: 0;
}
#text {
  z-index: 100;
  position: absolute;
  color: black;
  font-size: 24px;
  font-weight: bold;
  left: 150px;
  top: 350px;
}

</style>
