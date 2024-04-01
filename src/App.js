import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Addcard from "./components/Addcard";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Footbar from "./components/Footbar";

function App() {
  return (
   <div>
         <Navbar/>
         <TextForm/>
         <Cards/>
         <Addcard/>
         <Testimonials/>
         <Hero/>
         <Footer/>
         <Footbar/>
         
   </div>
  );
}

export default App;
