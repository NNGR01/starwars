import './css/App.css';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
<div className="container">
  <div className="row">
    <div className="h3 col-md-2 text-white">blog construido para consumir la swapi tech </div>
    <div className="gif col-md-6">
      <img src="https://media.giphy.com/media/RLKbCYRD4EtzUVkbMt/giphy.gif" alt="gif1" className="mt-3" />
      <img src="https://media.giphy.com/media/3o84sCEktZAjG9flte/giphy.gif" alt="gif2" className="mt-3" />
      <img src="https://media.giphy.com/media/3oeSAFBvE1Tn89ysfK/giphy.gif" alt="gif3" className="mt-3" />
    </div>
  </div>
</div>
       
    )
}


export default Home;