const { mount } = require('@vue/test-utils')
const NewNoteForm = require('../../src/components/NewNoteForm')

describe('Testing NotizenCreateForm.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(NewNoteForm)

    // then
    expect(wrapper.find('#note-create-offcanvas').classes()).not.toContain('show')
  })
})
