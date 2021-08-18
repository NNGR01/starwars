import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import './css/App.css';
import Home from './Home';
import Nav from './nav';
import injectContext from './store/appContext';
import Characters from './views/characters';
import Planets from './views/planets';
import Vehicles from './views/vehicles';


const App = () => {
    return (
      <BrowserRouter>
      <Route component={Nav} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/personajes" component={Characters} />
        <Route exact path="/planetas" component={Planets} />
        <Route exact path="/vehiculos" component={Vehicles} />

      </Switch>
      </BrowserRouter>
    )
}

export default injectContext(App);






