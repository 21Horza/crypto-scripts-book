import { type CodeMode } from '@/shared/consts/codeMode';
import { CodeContext } from '@/shared/context/CodeContext';
import { invoke } from '@tauri-apps/api';
import { useContext } from 'react';

interface UsePrintCodeResult {
  togglePrintCode: () => Promise<void>;
  printCode?: string;
  functionResult?: string;
}

export function usePrintCode (functionName: string, mode: CodeMode): UsePrintCodeResult {
  const { printCode, setPrintCode, setFunctionResult, functionResult } = useContext(CodeContext);

  const togglePrintCode = async () => {
    try {
      if (mode === 'P') {
        const newPrintCode = await invoke<string>(functionName);
        setPrintCode?.(newPrintCode);
      }
      if (mode === 'E' || mode === 'D') {
        const result = await invoke<string>(functionName);
        setFunctionResult?.(result);
      } else {
        throw new Error('Missing the correct mode')
      }
    } catch (e) {
      console.log(e)
    }
  };

  return {
    printCode,
    functionResult,
    togglePrintCode
  };
}
