import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/screen/Home';
import About from './components/screen/About';
import Contact from './components/screen/Contact';
import PageNotFound from './components/screen/PageNotFound';
import NavBar from './components/includess/NavBar';
import Products from './components/screen/Products';
import ProductNav from './components/includess/ProductNav';
import Electrinics from './components/screen/Electrinics';
import Fashion from './components/screen/Fashion';
import Students from './components/screen/Students';
import StudentsView from './components/screen/StudentsView';



function App() {
  return (
      <Router>
          <NavBar/>
          <Routes>
            <Route path='home' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>

            <Route path='products' element={<ProductNav/>}>   /**nested router */
                <Route index element={<Products/>}/>         /**index kodukkunnath parent folder click cheyyumbol thanne next file le data show aakum */
                <Route path='all' element={<Products/>}/>
                <Route path='fashion' element={<Fashion/>}/>
                <Route path='electrinics' element={<Electrinics/>}/>
                <Route path='students' element={<Students/>}/>
                <Route path='students/:name' element={<StudentsView/>}/>  /**useParam - recieves any value (students and studentsView file nokkuka)*/
            </Route>
            
            <Route path='fashion' element={<Fashion/>}/>
             <Route path='*' element={<PageNotFound/>}/>
          </Routes>
      </Router>
  );
}

export default App;


//routed pagente ullil veroru router (example fashion and electronics in this page)