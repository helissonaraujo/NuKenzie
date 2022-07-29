import './App.css';
import './home.css';
import { useState } from 'react';
import Login from './components/Login/index.js';
import TotalMoney from './components/Home/TotalMoney';
import List from './components/Home/List/index.js';
import Header from './components/Home/Header/index.js';
import Form from './components/Home/Form/index.js';
import Filter from './components/Home/Filter/index.js';

function App() {
  const [listaTranactions, setListaTranactions] = useState([]);
  const [login , setLogin] = useState(false);
  const useLogin = () => {
    setLogin(true);
  }
  const logOut = () => {
    setLogin(false);
    window.location.reload();
  }

  const valtotal = listaTranactions.reduce((acc, curr) => {
    return curr.type === "Entrada" ? acc + Number(curr.value) : acc - curr.value;
  }, 0);
  
  if(login === false){
    return(
      <header className="App-header">
      <Login isLogin={useLogin}/>
      </header>

    )}
    else{
      return(
          <div>
            <header>
                <Header isLogin={logOut}/>
            </header>
            <main className="Container">
              <section>
                  <div>
                      <Form listaTranactions={listaTranactions} setListaTranactions={setListaTranactions}/>
                  </div>
                  <div>
                      <TotalMoney total={valtotal}/>
                  </div>
              </section>
              <section className="aside-container">
                  {listaTranactions.length > 0 ? <div><Filter/><List listaTranactions={listaTranactions}/></div>: 
                  <section>
                    <div>
                      <Filter/>
                    </div>
                  <div>
                    <h1 className='empty-text'>Você não possui nenhum lançamento</h1>
                  </div>
                  <div className="container-void">
                    <div className="list-empty"></div>
                    <div className="list-void"></div>
                  </div>
                  <div className="container-void">
                    <div className="list-empty"></div>
                    <div className="list-void"></div>
                  </div>
                  <div className="container-void">
                    <div className="list-empty"></div>
                    <div className="list-void"></div>
                  </div>
                </section>}
              </section>
            </main>
          </div>
      )
    }
}
export default App;
