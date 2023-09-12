import { memo, useState } from 'react';
import cls from './SplitPane.module.scss';
import SplitPaneReact, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';

export const SplitPane = memo(() => {
  const [sizes, setSizes] = useState([100, '30%', 'auto']);
  const [sizes2, setSizes2] = useState([100, '30%', 'auto']);

  return (
        <div className={cls.SplitPane}>
            <SplitPaneReact
                split='vertical'
                sizes={sizes}
                onChange={setSizes}
                >
                <Pane className={cls.code} minSize={5} maxSize='90%'>
                    <div>
                    \\ CODE
                    </div>
                </Pane>
                <SplitPaneReact
                split='horizontal'
                sizes={sizes2}
                onChange={setSizes2}
                >
                <Pane className={cls.msg} minSize={100} maxSize='80%'>
                    <div>
                    \\ MESSAGE
                    </div>
                </Pane>
                <Pane className={cls.result} minSize={10}>
                    <div>
                    \\ RESULT
                    </div>
                </Pane>
                </SplitPaneReact>
            </SplitPaneReact>
        </div>
  );
});
