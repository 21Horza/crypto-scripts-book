import './styles/index.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SplitPane } from '@/widgets/SplitPane';

function App () {
  const { theme } = useTheme();

  return (
        <div className={classNames('app', {}, [theme])}>
          <Navbar />
          <SplitPane />
      </div>
  );
}

export default App;
