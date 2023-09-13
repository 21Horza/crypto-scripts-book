import { memo, useState } from 'react';
import cls from './SplitPane.module.scss';
import SplitPaneReact, { Pane, SashContent } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import { Code } from '@/shared/ui/Code';

export const SplitPane = memo(() => {
  const [sizes, setSizes] = useState([100, '30%', 'auto']);
  const [sizes2, setSizes2] = useState([100, '30%', 'auto']);
  // eslint-disable-next-line no-useless-escape, max-len
  const codeMock = 'pub async fn ceasar(msg: &str, shift: u8) -> String \{\nmsg.chars(\)\n.map(|c| {\nif c.is_ascii_alphabetic() {\nlet first = if c.is_ascii_lowercase() { b\'a\' } else { b\'A\' };'
  return (
        <div className={cls.SplitPane}>
            <SplitPaneReact
                split='vertical'
                sizes={sizes}
                onChange={setSizes}
                sashRender={() => (
                  <SashContent className={cls.actionSashWrap} />
                )}
                >
                <Pane className={cls.code} minSize={5} maxSize='90%'>
                    <Code text={codeMock} />
                </Pane>
                <SplitPaneReact
                sashRender={() => (
                  <SashContent className={cls.actionSashWrap} />
                )}
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
