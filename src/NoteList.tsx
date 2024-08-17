import { useMemo, useState } from "react";
import { Form,Row,Col, Stack,Button, } from "react-bootstrap"
import { Link } from "react-router-dom"
import ReactSelect from "react-select"
import { Tag } from "./App";
import { Note } from "./App";

type SimplifiedNote = {
    tags: Tag[]
    title: string
    id: string
}
type NoteListProps = {
    availableTags: Tag[]
    notes: SimplifiedNote[]
}

function NoteCard({id, title, tags}: SimplifiedNote){
    return <h1>kjbkb</h1>
}


const NoteList = ({availableTags, notes }: NoteListProps) => {
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
    const [title, setTitle] = useState("");

    const filteredNotes = useMemo(()=> {
        return notes.filter(note => {
            return (title === "" || note.title.toLowerCase().includes(title.toLowerCase())) &&
            (selectedTags.length === 0 || 
                selectedTags.every(tag => 
                    note.tags.some(noteTag => noteTag.id === tag.id)
                )
            )
        })
    }, [title, selectedTags, notes])


  return (
    <>
        <Row className="align-items-center mb-4">
            <Col><h1>Notes</h1></Col>
            <Col xs="auto">
                <Stack gap={2} direction="horizontal">
                    <Link to="/new">
                    <Button variant="primary">Create</Button>
                    </Link>
                    <Button variant="outline-secondary">Edit Tags</Button>
                </Stack>
            
            </Col>
            
        </Row>

        <Form>
            <Row className="mb-4">
                <Col>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title}
                onChange={e => setTitle(e.target.value)}
                />
                </Col>
                <Col>
                <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <ReactSelect 
            //   onCreateOption={label => {
            //     const newTag = {id:uuidv4(), label}
            //     onAddTag(newTag)  //to store on local storage
            //     // availableTags={tags}
            //     setSelectedTags(prev => [...prev, newTag])
            //   }} 
              value={selectedTags.map( tag => {
                return {label: tag.label, value: tag.id}
              })}
              options={availableTags.map(tag => {
                return {label: tag.label, value: tag.id}
              })}
              //converting to store our actual data type
              onChange={tags =>{
                setSelectedTags(
                  tags.map(tag =>{
                    return { label: tag.label, id: tag.value}
                  })
                )
              }}
              isMulti />
            </Form.Group>
                
                </Col>
            </Row>
        </Form>

        <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
            {filteredNotes.map(note => (
                <Col key={note.id}>
                    <NoteCard id={note.id} title={note.title} tags={note.tags}/>
                </Col>
            ))}

        </Row>
    </>
  )
}

export default NoteList