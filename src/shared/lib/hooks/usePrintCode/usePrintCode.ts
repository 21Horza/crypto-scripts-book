import { CodeContext } from '@/shared/context/CodeContext';
import { invoke } from '@tauri-apps/api';
import { useContext } from 'react';

interface UsePrintCodeResult {
  togglePrintCode: () => Promise<void>;
  printCode?: string;
}

export function usePrintCode (functionName: string): UsePrintCodeResult {
  const { printCode, setPrintCode } = useContext(CodeContext);

  const togglePrintCode = async () => {
    try {
      const newPrintCode = await invoke<string>(functionName);
      setPrintCode?.(newPrintCode);
    } catch (e) {
      console.log(e)
    }
  };

  return {
    printCode,
    togglePrintCode
  };
}
