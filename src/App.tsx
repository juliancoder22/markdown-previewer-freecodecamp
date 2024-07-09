import React, { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import "./App.scss";

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>(initialMarkdown);

  return (
    <div className="app">
      <Editor markdown={markdown} onMarkdownChange={setMarkdown} />
      <Preview markdown={markdown} />
    </div>
  );
};

const initialMarkdown = `
# Heading 1
## Heading 2
[Link](https://www.example.com)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**
`;

export default App;
