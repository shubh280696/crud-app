import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditModal = ({ item, onSave, onHide }) => {
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newGender, setNewGender] = useState('');

  useEffect(() => {
    if (item) {
      setNewName(item.name);
      setNewEmail(item.email);
      setNewGender(item.gender);
    }
  }, [item]);

  const handleSave = () => {
    onSave(item.id, newName, newEmail, newGender);
    onHide();
  };

  return (
    <Modal show={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {item && (
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Check
                inline
                type="radio"
                label="Male"
                value="male"
                checked={newGender === 'male'}
                onChange={() => setNewGender('male')}
              />
              <Form.Check
                inline
                type="radio"
                label="Female"
                value="female"
                checked={newGender === 'female'}
                onChange={() => setNewGender('female')}
              />
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" onClick={handleSave}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
