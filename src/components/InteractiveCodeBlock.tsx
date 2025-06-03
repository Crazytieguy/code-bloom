import { useState } from "react";
import { CopyButton } from "./CopyButton";

interface InteractiveCodeBlockProps {
  template: string;
  language?: string;
  placeholders?: { [key: string]: string };
}

export function InteractiveCodeBlock({ 
  template, 
  language, 
  placeholders = {} 
}: InteractiveCodeBlockProps) {
  const [values, setValues] = useState<{ [key: string]: string }>(placeholders);

  const generateCode = () => {
    let code = template;
    for (const [key, value] of Object.entries(values)) {
      code = code.replace(new RegExp(`\\{${key}\\}`, 'g'), value || `{${key}}`);
    }
    return code;
  };

  const placeholderKeys = Object.keys(placeholders);
  const hasPlaceholders = placeholderKeys.length > 0;

  return (
    <div className="not-prose space-y-3">
      {hasPlaceholders && (
        <div className="grid gap-3 sm:grid-cols-2">
          {placeholderKeys.map((key) => (
            <div key={key}>
              <label className="label">
                <span className="label-text capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
              </label>
              <input
                type="text"
                placeholder={placeholders[key]}
                className="input input-bordered w-full"
                value={values[key] || ''}
                onChange={(e) => setValues(prev => ({ ...prev, [key]: e.target.value }))}
              />
            </div>
          ))}
        </div>
      )}
      
      <div className="relative bg-base-200 rounded-lg overflow-hidden">
        <div className="flex justify-between items-center px-4 py-2 bg-base-300 border-b border-base-200">
          {language && (
            <span className="text-sm text-base-content opacity-70">{language}</span>
          )}
          <CopyButton text={generateCode()} />
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm">{generateCode()}</code>
        </pre>
      </div>
    </div>
  );
}