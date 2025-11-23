import './App.css'
import ClockSlogan from './componets/ClockSlogan'
import CurrentTime from './componets/ClockTime'
import ClockHeding from './componets/ClockHeading'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return <center>
    <ClockHeding/> 
    <ClockSlogan/>
    <CurrentTime/>
  </center>
    
      
  
}

export default App
