import "./App.css";
import Hero from "./Combonents/Hero";
import Footer from "./Combonents/footer";
import Header from "./Combonents/Header";
import CategoriesSection from "./Combonents/CategoriesSection";
import SubHeader from "./Combonents/SubHeader";
import ArticlePage from "./pages/ArticlePage";
const page = 0;
function App() {
  return page === 1 ? (
    <div className=" w-screen">
      <Header></Header>
      <Hero></Hero>
      <CategoriesSection></CategoriesSection>
      <Footer></Footer>
    </div>
  ) : (
    <div className=" w-screen">
      <Header></Header>
      <ArticlePage></ArticlePage>
      <Footer></Footer>
    </div>
  );
}

export default App;