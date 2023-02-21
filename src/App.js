import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Headers/Header";
import TechnaSwap from "./Components/Swap/TechnaSwap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
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

      <div>
        <Header />
        <TechnaSwap />
        <Footer />
      </div>
    </>
  );
}

export default App;
