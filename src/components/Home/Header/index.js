import './header.css'
function Header(props){
    return(
        <div className="container">
            <h1 className='info-title'>Nu <span className='span'>Kenzie</span></h1>
            <button className="button"onClick={props.isLogin}>Início</button>
        </div>
    )
}

export default Header;