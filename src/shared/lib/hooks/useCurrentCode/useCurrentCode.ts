import { CodeContext } from '@/shared/context/CodeContext';
import { useContext } from 'react';

interface UseCurrentCodeResult {
  toggleCurrentCode: () => void;
  currentDecrypt?: string;
  currentEncrypt?: string;
  currentTitle?: string;
}

export function useCurrentCode (encrypt: string, decrypt: string, title: string): UseCurrentCodeResult {
  const {
    setCurrentEncrypt,
    setCurrentDecrypt,
    currentDecrypt,
    currentEncrypt,
    currentTitle,
    setCurrentTitle
  } = useContext(CodeContext);

  const toggleCurrentCode = () => {
    setCurrentEncrypt?.(encrypt);
    setCurrentDecrypt?.(decrypt);
    setCurrentTitle?.(title);
  };

  return {
    currentEncrypt,
    currentDecrypt,
    currentTitle,
    toggleCurrentCode
  };
}
