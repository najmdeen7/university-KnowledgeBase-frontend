import "./App.css";
import Hero from "./Combonents/Hero";
import Footer from "./Combonents/footer";
import Header from "./Combonents/Header";
import CategoriesSection from "./Combonents/CategoriesSection";
function App() {
  return (
    <div className=" w-screen ">
      <Header></Header>
      <Hero></Hero>
      <CategoriesSection></CategoriesSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
