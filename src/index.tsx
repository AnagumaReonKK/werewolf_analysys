import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DateProgressesProvider } from './components/providers/DateProgressesProvider';
import { SelectVoteBoardDateProvider } from './components/providers/SelectVoteBoardDateProvider';
import { SelectPlayerBoardDateProvider } from './components/providers/SelectPlayerBoardDateProvider';
import { PlayersProvider } from './components/providers/PlayersProvider';
import { VotesProvider } from './components/providers/VotesProvider';
import { VoteFormProvider } from './components/providers/VoteFormProvider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <DateProgressesProvider>
    <PlayersProvider>
    <VotesProvider>
    <VoteFormProvider>
    <SelectPlayerBoardDateProvider>
    <SelectVoteBoardDateProvider>
      <App />
    </SelectVoteBoardDateProvider>
    </SelectPlayerBoardDateProvider>
    </VoteFormProvider>
    </VotesProvider>
    </PlayersProvider>
    </DateProgressesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
