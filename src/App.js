import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Work from "./pages/works";
function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <Work />
      <Contact />
    </>
  );
}

export default App;
