// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Signup from './SignUpForm';
import './Signup.css';

function SignupFormPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Signup />
        </Modal>
      )}
    </>
  );
}

export default SignupFormPage;
