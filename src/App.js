import { BrowserRouter, Route } from 'react-router-dom'; 
import './css/App.css';
import Home from './Home';


const App = () => {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
            
        
      </BrowserRouter>
    )
}

export default App;






