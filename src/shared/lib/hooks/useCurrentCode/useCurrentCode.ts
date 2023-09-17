import { type CodeMode } from '@/shared/consts/codeMode';
import { CodeContext } from '@/shared/context/CodeContext';
import { useContext } from 'react';

interface UseCurrentCodeResult {
  toggleCurrentCode: () => Promise<void>;
  currentDecrypt?: string;
  currentEncrypt?: string;
}

export function useCurrentCode (currentFunction: string, mode: CodeMode): UseCurrentCodeResult {
  const { setCurrentEncrypt, setCurrentDecrypt, currentDecrypt, currentEncrypt } = useContext(CodeContext);

  const toggleCurrentCode = async () => {
    try {
      if (mode === 'E') {
        setCurrentEncrypt?.(currentFunction);
      }
      if (mode === 'D') {
        setCurrentDecrypt?.(currentFunction);
      } else {
        throw new Error('Missing the correct mode')
      }
    } catch (e) {
      console.log(e)
    }
  };

  return {
    currentEncrypt,
    currentDecrypt,
    toggleCurrentCode
  };
}
