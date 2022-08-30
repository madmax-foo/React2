import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import FooterComponent from './MyComponents/Footer';
import LatestReleaseComponent from './MyComponents/LatestRelease';
import CustomNavbar from './MyComponents/MyNav';
import WelcomeComponent from './MyComponents/Welcome';


function App() {
  return (
    <div className="m-0">
      <CustomNavbar/>
      <WelcomeComponent/>
      <LatestReleaseComponent/>
      <FooterComponent/>
      </div>
    
  )
  
}

export default App;
