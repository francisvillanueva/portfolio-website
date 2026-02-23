import 'bootstrap/dist/css/bootstrap.min.css';
import MobileWarning from './MobileWarning'

import Icons from './Icons.jsx'

function App() {
  return (
    <>
    <MobileWarning />
    <div className='focusScreen'>
      <div className='Sidebar'></div>
        <div className='CalicOS'>
          <Icons/>

          <div className="titleBar">
            <h1 id='title'>CalicOS</h1>
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
