import { memo, useContext, useState } from 'react';
import cls from './SplitPane.module.scss';
import SplitPaneReact, { Pane, SashContent } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import { Code } from '@/shared/ui/Code';
import { Textarea } from '@/shared/ui/Textarea';
import { CodeContext } from '@/shared/context/CodeContext';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

export const SplitPane = memo(() => {
  const [sizes, setSizes] = useState([100, '8%', 'auto']);
  const [sizes2, setSizes2] = useState([100, '10%', 'auto']);
  const { printCode } = useContext(CodeContext);
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');
  const [key, setKey] = useState<string | number>();

  const onClearHandler = () => {
    setResult('');
    setMessage('');
    setKey('');
  }

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
                  <div className={cls.btns}>
                    <Button
                    variant='encrypt'
                    >
                      Encrypt
                    </Button>
                    <Button
                    disabled
                    variant='decrypt'
                    >
                      Decrypt
                    </Button>
                    <Button
                    onClick={onClearHandler}
                    color='error'
                    variant='normal'
                    >
                      Clear
                    </Button>
                  </div>
                  <form className={cls.form}>
                    <Input
                    className={cls.keyInput}
                    onChange={setKey}
                    placeholder='// Key'
                    value={key}
                    />
                    <Textarea
                    setText={setMessage}
                    placeholder={'// Message'}
                    value={message}
                    />
                  </form>
                </Pane>
                <Pane className={cls.result} minSize={10}>
                <Textarea
                    setText={setMessage}
                    placeholder={'// Result'}
                    readonly
                    value={result}
                    />
                </Pane>
                </SplitPaneReact>
            </SplitPaneReact>
        </div>
  );
});
