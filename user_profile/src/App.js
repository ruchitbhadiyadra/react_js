import './App.css';
import "./component/profile.css"
import Profile from './component/profile'

function App() {
  return (
    <div className="App">
      <h1>Reusable User Card</h1>
      <div className="app2">
        <Profile img={"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg"} name="men" email="men@gmail.com" age={25} phoneno={252563145} address="punagam"/>
        <Profile img={"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg"} name="hi" email="hi@gmail.com" age={25} phoneno={252563145} address="punagam"/>
      </div>
    </div>
  );
}

export default App;
