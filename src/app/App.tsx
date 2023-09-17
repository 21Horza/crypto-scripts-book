import './styles/index.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SplitPane } from '@/widgets/SplitPane';
import { CodeContext } from '@/shared/context/CodeContext';
import { MessageResultContext } from '@/shared/context/MessageResultContext';
import { useState } from 'react';

function App () {
  const { theme } = useTheme();
  const [printCode, setPrintCode] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');
  const [currentEncrypt, setCurrentEncrypt] = useState('');
  const [currentDecrypt, setCurrentDecrypt] = useState('');

  const msgResultInit = {
    message,
    setMessage,
    result,
    setResult,
  }

  const codeInit = {
    printCode,
    setPrintCode,
    currentDecrypt,
    currentEncrypt,
    setCurrentDecrypt,
    setCurrentEncrypt
  }

  return (
      <MessageResultContext.Provider value = {msgResultInit}>
      <CodeContext.Provider value = {codeInit}>
          <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <SplitPane />
          </div>
      </CodeContext.Provider>
      </MessageResultContext.Provider>
  );
}

export default App;
