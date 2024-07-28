import React from 'react';
import './App.css'; // Importing global styles
import Footer from './Components/Footer/Footer';
import Header from './Components/Headers/Header';
import TechnaSwap from './Components/Swap/TechnaSwap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importing Toastify styles

function App() {
  return (
    <>
      {/* Toast Container for notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* Main application layout */}
      <Header />
      <TechnaSwap />
      <Footer />
    </>
  );
}

export default App;
