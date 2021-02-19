
import './App.css';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';

import { Home } from './components/Home';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
  <div className="content-wrap">
<Header/>
<hr/>
 <Home/>
     <Footer/>
     </div> 
    </div>
  );
}

export default App;
