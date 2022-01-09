<template>
  <div class=" row row-cols-4" id="container">
    <div class="col m-5" v-for="notiz in notizen" :key="notiz.id">
      <note-card :notiz="notiz" v-on:changeKey="change()" ></note-card>
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
  props: {
    notizen: {
      type: Array,
      required: true
    }
  },
  methods: {
    change () {
      this.$emit('changeKey')
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
