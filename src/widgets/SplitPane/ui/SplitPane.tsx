import { memo, useContext, useState } from 'react';
import cls from './SplitPane.module.scss';
import SplitPaneReact, { Pane, SashContent } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import { Code } from '@/shared/ui/Code';
import { Textarea } from '@/shared/ui/Textarea';
import { CodeContext } from '@/shared/context/CodeContext';

export const SplitPane = memo(() => {
  const [sizes, setSizes] = useState([100, '8%', 'auto']);
  const [sizes2, setSizes2] = useState([100, '10%', 'auto']);
  const { printCode } = useContext(CodeContext);

  const [text,] = useState('');
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
                <Pane className={cls.codePane} minSize={5} maxSize='90%'>
                    <Code className={cls.code} code={printCode} />
                </Pane>
                <SplitPaneReact
                sashRender={() => (
                  <SashContent className={cls.actionSashWrap} />
                )}
                split='horizontal'
                sizes={sizes2}
                onChange={setSizes2}
                >
                <Pane minSize={100} maxSize='80%'>
                    <Textarea placeholder={'// Message'} text={text} />
                </Pane>
                <Pane className={cls.result} minSize={10}>
                    <Textarea placeholder={'// Result'} readonly text='' />
                </Pane>
                </SplitPaneReact>
            </SplitPaneReact>
        </div>
  );
});
