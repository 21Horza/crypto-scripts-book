import { CodeContext } from '@/shared/context/CodeContext';
import {
  type ReactNode,
  useMemo,
  useState,
} from 'react';

interface CodeProviderProps {
  children: ReactNode;
}

const CodeProvider = (props: CodeProviderProps) => {
  const {
    children,
  } = props;
  const [printCode, setPrintCode] = useState('');
  const [currentEncrypt, setCurrentEncrypt] = useState('');
  const [currentDecrypt, setCurrentDecrypt] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');

  const defaultProps = useMemo(() => ({
    printCode,
    setPrintCode,
    currentDecrypt,
    currentEncrypt,
    setCurrentDecrypt,
    setCurrentEncrypt,
    setCurrentTitle,
    currentTitle
  }), [printCode, currentEncrypt, currentDecrypt, currentTitle]);

  return (
    <CodeContext.Provider value={defaultProps}>
        {children}
    </CodeContext.Provider>
  );
};

export default CodeProvider;
