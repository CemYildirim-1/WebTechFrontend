import { mount } from '@vue/test-utils'
import NoteList from '../../src/components/NoteList'
import NoteCard from '../../src/components/NoteCard'

describe('Testing NotizenCardList.vue', () => {
  it('should render a notizen-card for each note', () => {
    // when
    const wrapper = mount(NoteList, {
      propsData: {
        notizen: [
          {
            id: 1,
            ldt: 'Sun Jan 09 2022 13:07:45',
            entry: 'Testeintrag 1',
            colour: 'blue'
          },
          {
            id: 2,
            ldt: 'Sun Jan 09 2022 13:07:45',
            entry: 'Testeintrag 2',
            colour: 'green'
          }
        ]
      }
    })

    // then
    const noteCards = wrapper.findAllComponents(NoteCard)
    expect(noteCards.length).toBe(2)
  })
})
