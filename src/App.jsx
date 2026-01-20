import 'bootstrap/dist/css/bootstrap.min.css';

import Icons from './Icons.jsx'
import Modals from './Modals.jsx'

function App() {
  return (
    <>
    <div className='focusScreen'>
      <div className='Sidebar'></div>
        <div className='CalicOS'>
          <Icons/>
          <Modals/>

          <div className="titleBar">
            <h1 id='title'>Calic OS</h1>
          </div>
          <div className="bottomBar">
            <p>&copy; {new Date().getFullYear()} Francis Villanueva </p>
          </div>
        </div>
        <div className='Sidebar'></div>
    </div>
    </>
  );
}

export default App
