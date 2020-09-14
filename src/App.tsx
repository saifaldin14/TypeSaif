import React, { useEffect, useMemo, useState } from "react";
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const App = () => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]);

  return (
    <Slate editor={editor} value={value} onChange={(newValue: any) => setValue(newValue)}>
      <Editable
        // Define a new handler which prints the key that was pressed.
        onKeyDown={event => {
          if (event.key === '&') {
            // Prevent the ampersand character from being inserted.
            event.preventDefault()
            // Execute the `insertText` method when the event occurs.
            editor.insertText("and")
          }
        }}
      />
    </Slate>
  )
}
export default App;