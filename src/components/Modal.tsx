import React from 'react';
import { X } from 'react-feather';
import Draggable from 'react-draggable';
import { ModalContext } from '../contexts/ModalProvider';
import TextEditor from './TextEditor';

const Modal = () => {
  return (
    <ModalContext.Consumer>
      {({ windowPosition, hasDraggedWindowPosition }) => (
        <Draggable
          handle=".modal-handle"
          defaultPosition={{ x: windowPosition.x, y: windowPosition.y }}
          position={hasDraggedWindowPosition ? { x: windowPosition.x, y: windowPosition.y } : null}
        >
          <div id="modal" className="modal-window" style={{
            // transform: windowPosition,
          }}>
            <head>
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i&subset=latin-ext"
              />
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
              />
            </head>
            <div className="modal-window-inner-border">
              <>
                <div className="modal-body">
                  <div className="modal-handle">
                    <div className="modal-close-button">
                      <X color="#5d6484" size="14" />
                    </div>
                  </div>
                  <div className="modal-content">
                    {/* <h3>{extensionId}</h3>
                    <button
                      onClick={getExtensionId}
                      className="modal-button"
                    >
                      Get Extension ID
                      </button> */}
                    <TextEditor />
                  </div>
                </div>
              </>
            </div>
          </div>
        </Draggable>
      )}
    </ModalContext.Consumer>
  );
};

export default Modal;
