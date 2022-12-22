import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
const App = () => {


  return (
    <>
      <Navbar />
      <main>
      <div className="container">
      {/* <Home /> */}
      <About/>
      </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
