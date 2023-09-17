import { memo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeProps {
  className?: string;
  code?: string;
}

export const Code = memo((props: CodeProps) => {
  const { code } = props;

  if (!code) {
    return;
  }

  return (
    <SyntaxHighlighter
    customStyle={{
      background: 'var(--bg-color)',
      overflowY: 'scroll',
      height: '100vh',
      fontWeight: '400',
    }} language="rust" style={vscDarkPlus}>
      {code}
    </SyntaxHighlighter>
  );
});
