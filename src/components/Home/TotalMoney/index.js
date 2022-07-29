import './totalmoney.css'
function TotalMoney(props){
    return(
        <div className='Money-container'>
            <div className='saldo-container'>
                <h1 className="saldo">Valor Total:</h1>
                <span className="value-info">R${props.total}</span>
            </div>
            <p className="info-saldo">O valor se refere ao saldo</p>
        </div>
    )
}

export default TotalMoney;