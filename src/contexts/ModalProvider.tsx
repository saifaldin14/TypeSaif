import React, { useEffect, useState } from 'react';
// import useWindowPosition from '../hooks/useWindowPosition';

const useWindowPosition = () => {
  return {
    windowPosition: { x: 100, y: 100 },
  }
};

export const ModalContext = React.createContext({
  windowPosition: { x: 0, y: 0 },
  hasDraggedWindowPosition: false,
  // extensionId, getExtensionId
});

const ModalProvider = ({ children }) => {
  const { windowPosition } = useWindowPosition();
  let hasDraggedWindowPosition: boolean = false;
  const [extensionId, setExtensionId] = useState(undefined);

  function getExtensionId() {
    window.postMessage({ type: "GET_EXTENSION_ID" }, "*");
  }

  useEffect(() => {
    // Set up event listeners from Content script
    window.addEventListener("message", function (event) {
      if (event.source !== window) return;
      if (event.data.type && (event.data.type === "EXTENSION_ID_RESULT")) {
        setExtensionId(event.data.extensionId);
      }
    });
  }, []);

  return (
    <ModalContext.Provider
      value={{
        windowPosition,
        hasDraggedWindowPosition
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
