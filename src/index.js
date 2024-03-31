import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { createRoot } from 'react-dom/client'; // Змінено імпорт тут

const container = document.getElementById('root');
const root = createRoot(container); // Використовуємо createRoot з нового імпорту

root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);
