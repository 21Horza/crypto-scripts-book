import { createContext } from 'react';

export interface PrintCodeContextProps {
  printCode?: string;
  setPrintCode?: (printCode: string) => void;
}

export const CodeContext = createContext<PrintCodeContextProps>({});
