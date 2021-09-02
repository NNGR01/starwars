import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import './css/App.css';
import Home from './Home';
import Nav from './nav';
import injectContext from './store/appContext';
import Char from './views/char';
import Characters from './views/characters';
import Plan from './views/plan';
import Planets from './views/planets';
import Veh from './views/veh';
import Vehicles from './views/vehicles';


const App = () => {
    return (
      <BrowserRouter>
      <Route component={Nav} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/personajes" component={Characters} />
        <Route exact path="/personajes/:id" component={Char} />
        <Route exact path="/planetas/:id" component={Plan} />
        <Route exact path="/planetas" component={Planets} />
        <Route exact path="/planetas/:id" component={Veh} />
        <Route exact path="/vehiculos" component={Vehicles} />

      </Switch>
      </BrowserRouter>
    )
}

export default injectContext(App);






