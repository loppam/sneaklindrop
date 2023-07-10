import "./App.css";
import Navbar from "./assets/navbar";
import Header from "./assets/header";
import Review from "./assets/review";
import Physical from "./assets/physical";
import Footer from "./assets/footer";
function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Header />
        <Review />
        <Physical />
      </div>
      <Footer />
    </div>
  );
}

export default App;
