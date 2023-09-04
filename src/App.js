import './index.css';
import Header from './components/header';
import Experience from './components/experience';
import Footer from './components/footer';
import Projects from './components/projects';



function App() {
  return (
    <div className="bg-[#000000] min-h-screen  font-grotesk text-white">
      <Header />
      <Experience/>
      <Projects/>
      <Footer/>
      
    </div>
  );
}

export default App;
