import nukenzie from'./assets/image.svg'
import './login.css'
function Login(props){
    return(
        <main className='Login'>
            <section className='info'>
                <h1 className='info-title'>Nu <span className='login-span'>Kenzie</span></h1>
                <p className='info-content'>Centralize o controle das suas finanças</p>
                <p className='info-bottom-content'>de forma rápida e segura</p>
                <button className='submit' onClick={props.isLogin}>Iniciar</button>
            </section>
            <section>
                <img className="logo" src={nukenzie}/>
            </section>
        </main>
    )
}
export default Login;