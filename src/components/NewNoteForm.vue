<template>
<button class="btn btn-dark sticky-button" data-bs-toggle="offcanvas" data-bs-target="#note-create-offcanvas" aria-controls="#note-create-offcanvas">
  <i class="bi bi-journal-plus padding"></i>
  </button>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="note-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">Neue Notiz</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="note-create-form" novalidate>
        <div class="mb-3">
          <label  class="form-label">Notiz</label>
          <textarea class="form-control" id="note" v-model="note" required rows="3"></textarea>
          <div class="invalid-feedback">
            Please provide the note.
          </div>
        </div>
        <div class="mb-3">
          <label for="colour" class="form-label">Notiz-Farbe</label>
          <select id="colour" class="form-select" v-model="noteColour" required>
            <option value="" selected disabled>wähle...</option>
            <option value="blue">Blau</option>
            <option value="green">Grün</option>
            <option value="lightBlue">Leichtes-Blau</option>
            <option value="yellow">Gelb</option>
          </select>
          <div class="invalid-feedback">
            Please select a colour.
          </div>
        </div>
        <div class="mt-5">
          <button class="btn btn-outline-dark m-1" type="submit" @click.prevent="createNote">erstellen</button>
          <button class="btn btn-outline-dark" type="reset" >zurücksetzten</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoteCreateForm',
  data () {
    return {
      note: '',
      noteColour: '',
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    createNote () {
      const valid = this.validate()
      if (valid) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/notizen'
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const payload = JSON.stringify({
          ldt: Date().replace(' GMT+0100 (Mitteleuropäische Normalzeit)', ''),
          entry: this.note,
          colour: this.noteColour

        })

        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: payload,
          redirect: 'follow'
        }
        fetch(endpoint, requestOptions)
          .catch(error => console.log('error', error))
        setTimeout(() => { this.$emit('changeKey') }, 250)
      }
    },
    validate () {
      let valid = true
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              valid = false
              event.preventDefault()
              event.stopPropagation()
            }

            form.classList.add('was-validated')
          }, false)
        })
      return valid
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 10px;
  border-radius: 60px;
}
.padding{
width: 40px;
  height: 40px;

}
</style>
