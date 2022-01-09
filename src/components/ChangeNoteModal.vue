<template>
  <!-- Button trigger modal -->
  <i class="bi bi-pencil-square" @click="safeNoteData(notiz)" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Notiz ändern</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="text-start needs-validation" id="note-create-form" novalidate>
            <div class="mb-3">
              <label  class="form-label">Notiz</label>
              <textarea class="form-control" id="note" v-model="note" rows="3" required></textarea>
              <div class="invalid-feedback">
                Please provide the note.
              </div>
            </div>
            <div class="mb-3">
              <label for="colour" class="form-label">Notiz-Farbe</label>
              <select id="colour" class="form-select" v-model="noteColour" required>
                <option value="" selected disabled>Choose...</option>
                <option value="blue">Blau</option>
                <option value="green">Grün</option>
                <option value="lightBlue">Leichtes-Blau</option>
                <option value="yellow">Gelb</option>
              </select>
              <div class="invalid-feedback">
                Please select a colour.
              </div>
            </div>
            <div v-if="this.serverValidationMessages">
              <ul>
                <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
                  {{ message }}
                </li>
              </ul>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal" @click="changeNote(returnNoteData())">Notiz speichern</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

let savedNote
export default {
  name: 'ChangeNoteModal',
  props: {
    notiz: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      note: '',
      noteColour: ''
    }
  },
  methods: {
    changeNote (notiz) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/notizen/' + notiz.id
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const payload = JSON.stringify({
        ldt: Date(),
        entry: this.note,
        colour: this.noteColour
      })

      const requestOptions = {
        method: 'PUT',
        headers: headers,
        body: payload,
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))
      setTimeout(() => { this.$emit('changeKey') }, 250)
    },
    returnNoteData () {
      return savedNote
    },
    safeNoteData (notiz) {
      savedNote = notiz
    }
  }
}
</script>

<style scoped>

</style>
