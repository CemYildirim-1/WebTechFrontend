<template>
  <div class="row row-cols-1  row-cols-md-2 row-cols-md-3 row-cols-md-4" id="container">
    <div class="col" v-for="notiz in notizen" :key="notiz.id">
      <note-card :notiz="notiz"></note-card>
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
