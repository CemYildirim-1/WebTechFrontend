import { mount } from '@vue/test-utils'
import Notizen from '../../src/views/Notizen'
import NewNoteForm from '../../src/components/NewNoteForm'

describe('Testing Nptizen.vue', () => {

  it('should have notizen card list component', () => {
    // when
    const wrapper = mount(Notizen)

    // then
    const cardList = wrapper.findComponent(NewNoteForm)
    expect(cardList.exists()).toBeTruthy()
  })
})
