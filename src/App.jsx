import Icons from './Icons.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <>
      <div class='Sidebar'></div>
      <div class='CalicOS'>
        <Icons/>
        <div>
          <h1 id='title'>Calic OS</h1>
        </div>
        <Footer/>
      </div>
      <div class='Sidebar'></div>
    </>
  );
}

export default App
