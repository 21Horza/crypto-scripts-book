import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { CodeProvider } from './app/providers/CodeProvider';
import { MessageResultProvider } from './app/providers/MessageResultProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MessageResultProvider>
      <CodeProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </CodeProvider>
    </MessageResultProvider>
  </React.StrictMode>,
);
