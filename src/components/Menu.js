import React from 'react';
import Form from '../components/Form';

const Menu = props => {
  const submit = () => {
    props.createNewRecord();
  };

  return (
    <div className="menu">
      <Form onSubmit={ submit }/>
    </div>
  )
};

export default Menu;
