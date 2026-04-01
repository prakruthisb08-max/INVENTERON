import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import StudentsPage from './Pages/StudentsPage';

function App() {
  return (
    <div>
      <Header />
      <Dashboard />
      <StudentsPage />
      <Footer />
    </div>
  );
}
export default App;
