import { MessageResultContext } from '@/shared/context/MessageResultContext';
import {
  type ReactNode,
  useMemo,
  useState,
} from 'react';

interface MessageResultProviderProps {
  children: ReactNode;
}

const MessageResultProvider = (props: MessageResultProviderProps) => {
  const {
    children,
  } = props;
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  const defaultProps = useMemo(() => ({
    message,
    setMessage,
    result,
    setResult,
  }), [message, result]);

  return (
    <MessageResultContext.Provider value={defaultProps}>
        {children}
    </MessageResultContext.Provider>
  );
};

export default MessageResultProvider;
