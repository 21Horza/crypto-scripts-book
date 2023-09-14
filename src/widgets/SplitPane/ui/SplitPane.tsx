/* eslint-disable @typescript-eslint/no-misused-promises */
import { memo, useState } from 'react';
import cls from './SplitPane.module.scss';
import SplitPaneReact, { Pane, SashContent } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import { Code } from '@/shared/ui/Code';
import { Textarea } from '@/shared/ui/Textarea';
import { invoke } from '@tauri-apps/api/tauri';

export const SplitPane = memo(() => {
  const [sizes, setSizes] = useState([100, '8%', 'auto']);
  const [sizes2, setSizes2] = useState([100, '10%', 'auto']);
  const [caesarCode, setCaesarCode] = useState('');

  async function printCeasar () {
    setCaesarCode(await invoke('print_caesar'));
  }
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
                  <button onClick={printCeasar}>
                    PRINT
                  </button>
                    <Code className={cls.code} text={caesarCode} />
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
