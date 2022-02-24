import SearchPhone from './SearchPhone';
import Gallery from './Gallery';
import About from './About';
import NoPage from './NoPage';
import Navbar from './Navbar';
import {Route, Routes} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import GalleryDetail from './GalleryDetail';

 

function App() {
  return (
      <div className='container'>
       <Navbar/>
     <main>
      <Routes>
        
          <Route exact path="/" element={<SearchPhone />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="/galleryDetail/:id" element={<GalleryDetail />} />
          <Route path="/login"      element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
    
      </Routes>
    </main>
      </div>
  
       
  );
}

export default App;
