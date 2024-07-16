// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
// 부트스트랩
import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();


ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>,
    document.getElementById('root')
);