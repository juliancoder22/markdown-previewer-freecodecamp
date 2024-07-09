import React from "react";
import { marked } from "marked";

interface PreviewProps {
  markdown: string;
}

const Preview: React.FC<PreviewProps> = ({ markdown }) => {
  const getMarkdownText = () => {
    const rawMarkup = marked(markdown, { breaks: true });
    return { __html: rawMarkup };
  };

  return (
    <div
      id="preview"
      className="preview"
      dangerouslySetInnerHTML={getMarkdownText()}
    />
  );
};

export default Preview;
