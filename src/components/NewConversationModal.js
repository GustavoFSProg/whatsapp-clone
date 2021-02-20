/* eslint-disable no-unreachable */
import React, { useRef, useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'

// import { Container } from './styles';

export default function NewConversationModal() {
  const { contacts } = useContacts()

  const [selectedContactId, setSelectedContactId] = useState([])

  function handleCheckBoxChange(contactId) {
    setSelectedContactId(prevSelectedContactId => {
      
    })
  }

  function handleSubmit() {
    return alert('Entrou!')
  }

  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <>
              <Form.Group controlId={contact.id} key={contact.id}>
                <Form.Check type="checkBox"></Form.Check>
                <Form.Control
                  type="text"
                  value={selectedContactId.includes(contact.id)}
                  label={contact.name}
                  onChange={() => handleCheckBoxChange(contact.id)}
                />
              </Form.Group>
              <Button type="submit">Create</Button>
            </>
          ))}
        </Form>
      </Modal.Body>
    </>
  )
}
