import { NoteData } from "./App"
import NoteForm from "./NoteForm"
type NewNoteProps = {
  onSubmit: (data: NoteData) => void
}
const NewNote = ({onSubmit}: NewNoteProps )=>{
  return (
    <>
        <h1>New Note</h1>
        <NoteForm onSubmit={onSubmit}/>
    </>
  )
}

export default NewNote