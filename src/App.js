import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Task1 from './components/Task1/Task1';
import Task2 from './components/Task2/Task2';

function App(){
  return (
    <div>
      <header className="navbar">
        <div className="nav-inner">
          <div className="nav-brand">DataVinci</div>
          <nav className="nav-links header-links">
            <Link to="/task1">Task 1</Link>
            <Link to="/task2">Task 2</Link>
          </nav>
        </div>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Task1 />} />
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
        </Routes>
      </main>
      <footer className="footer">© 2025 DataVinci Assignment</footer>
    </div>
  );
}

export default App;
