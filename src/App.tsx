import React from 'react';
import './App.css';
import Modal from './components/Modal';
import ModalProvider from './contexts/ModalProvider';

/**
 * @return {null}
 */
function App() {
  return (
    <ModalProvider>
      <Modal />
    </ModalProvider>
  );
}

export default App;
