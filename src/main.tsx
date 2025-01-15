import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './ui/App.tsx';
import './ui/styles/global.scss';
import { ContextProvider } from './application/context/appContext.provider.tsx';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

ReactDOM.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>,
  document.getElementById('root')
);
