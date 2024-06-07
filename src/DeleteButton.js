import React from 'react';
import { Button } from 'react-bootstrap';

const DeleteButton = ({ onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <Button variant="danger" onClick={handleDelete}>Delete</Button>
  );
};

export default DeleteButton;
