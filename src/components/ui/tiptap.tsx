'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Bold from '@tiptap/extension-bold'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

const Tiptap = ({ value, setText }: { value: string, setText: (value: string) => void}) => {
    const editor = useEditor({
    extensions: [StarterKit, Bold, Document, Paragraph, Text],
    content: value || "Type something...",
    onUpdate: ({ editor }) => {
      setText(editor.getHTML());
    },
  })

  if (!editor) {
    return null
  }

  return (
    <div className='flex flex-col w-full'>
        <div className="flex gap-2">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active' : ''}
          >
            B
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
          >
            I
          </button>
        </div>
      
      <EditorContent editor={editor} className='w-full'/>
    </div>
  )
}

export default Tiptap

