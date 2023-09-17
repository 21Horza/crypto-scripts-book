import './styles/index.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SplitPane } from '@/widgets/SplitPane';
import { CodeContext } from '@/shared/context/CodeContext';
import { useState } from 'react';

function App () {
  const { theme } = useTheme();
  const [printCode, setPrintCode] = useState('')

  return (
      <CodeContext.Provider value = {{ printCode, setPrintCode }}>
          <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <SplitPane />
          </div>
      </CodeContext.Provider>
  );
}

export default App;
