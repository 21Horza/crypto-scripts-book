import { useTheme } from '@/shared/lib/hooks';
import { memo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gruvboxDark, gruvboxLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeProps {
  className?: string;
  code?: string;
}

export const Code = memo((props: CodeProps) => {
  const { code } = props;
  const { theme } = useTheme();

  if (!code) {
    return;
  }

  return (
    <SyntaxHighlighter
    customStyle={{
      background: 'var(--bg-color)',
      overflowY: 'scroll',
      height: '100vh',
    }}
    language="rust"
    showLineNumbers
    showInlineLineNumbers
    style={
      theme === 'app_dark_theme'
        ? gruvboxDark
        : gruvboxLight
    }
    >
      {code}
    </SyntaxHighlighter>
  );
});
