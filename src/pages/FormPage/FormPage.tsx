import { useState, memo } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

export const FormPage = memo(() => {
  const [ceasarMsg, setCeasar] = useState('');
  const [msg, setMsg] = useState('');
  const [shift, setShift] = useState(2);

  async function ceasar () {
    setCeasar(await invoke('ceasar', { msg, shift }));
  }
  return (
        <>
        <form
                className="row"
                onSubmit={(e) => {
                  e.preventDefault();
                  // eslint-disable-next-line @typescript-eslint/no-floating-promises
                  ceasar();
                }}
            >
                <Input
                  id="greet-input"
                  onChange={(e) => { setMsg(String(e)); }}
                  placeholder="Enter a message..."
                />
                <Input
                  id="shift-input"
                  type="number"
                  value={shift}
                  onChange={(e) => { setShift(Number(e)); }}
                  placeholder="Enter a shift..."
                />
                <Button type="submit">Encrypt</Button>
            </form>
          <p>{ceasarMsg}</p>
        </>
  );
});
