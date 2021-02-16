import React, { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

// import { Container } from './styles';

function NewContactModal({ closeModal }) {
  const idRef = useRef()
  const nameRef = useRef()

  function handleSubmit(e) {
    e.eventDefault()

    // createContact(idRef.current.value, nameRef.current.value)

    closeModal()
  }

  return (
    <>
      <Modal.Header closeButton> Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required></Form.Control>
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  )
}

export default NewContactModal
