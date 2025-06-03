import { CopyButton } from "./CopyButton";

interface CodeBlockProps {
  children: string;
  language?: string;
}

export function CodeBlock({ children, language }: CodeBlockProps) {
  return (
    <div className="not-prose relative bg-base-200 rounded-lg overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 bg-base-300 border-b border-base-200">
        {language && (
          <span className="text-sm text-base-content opacity-70">{language}</span>
        )}
        <CopyButton text={children} />
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm">{children}</code>
      </pre>
    </div>
  );
}