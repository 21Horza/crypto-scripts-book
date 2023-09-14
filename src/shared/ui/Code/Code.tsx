import { memo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import cls from './Code.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;
  return (
    <SyntaxHighlighter customStyle={{
      background: 'var(--bg-color)',
      overflowY: 'scroll',
      height: '100vh',
    }} language="rust" style={vscDarkPlus}>
      {text}
    </SyntaxHighlighter>
  );
});
