import React from "react";

interface EditorProps {
  markdown: string;
  onMarkdownChange: (markdown: string) => void;
}

const Editor: React.FC<EditorProps> = ({ markdown, onMarkdownChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onMarkdownChange(e.target.value);
  };

  return (
    <textarea
      id="editor"
      value={markdown}
      onChange={handleChange}
      className="editor"
    />
  );
};

export default Editor;
