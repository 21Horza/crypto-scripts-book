import { createContext } from 'react';

export interface CodeContextProps {
  printCode?: string;
  setPrintCode?: (printCode: string) => void;
  functionResult?: string;
  setFunctionResult?: (printCode: string) => void;
  currentEncrypt: string;
  setCurrentEncrypt?: (printCode: string) => void;
  currentDecrypt: string;
  setCurrentDecrypt?: (printCode: string) => void;
  currentTitle: string;
  setCurrentTitle?: (printCode: string) => void;
}

export const CodeContext = createContext<CodeContextProps>({
  currentEncrypt: '',
  currentDecrypt: '',
  currentTitle: ''
});
