import React from 'react';

import Header from './Components/Headers/Header';
import TechnaSwap from './Components/Swap/TechnaSwap';
import Footer from './Components/Footer/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <main>
        <TechnaSwap />
      </main>
      <Footer />
    </>
  );
}

export default App;
