import { createContext } from 'react';

export interface MessageResultContextProps {
  message?: string;
  setMessage?: (msg: string) => void;
  result?: string;
  setResult?: (rslt: string) => void;
}

export const MessageResultContext = createContext<MessageResultContextProps>({});
