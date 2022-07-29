import './card.css'
import trash from './assets/trash.png'
function Card(props){
    return(
        <div className="card">
            <div className='content-card'>
                <h1 className='card-description'>{props.description}</h1>
                <p className='card-type'>{props.type}</p>
            </div>
            <div className='value-card'>
                <p className='card-value'>R${props.value}</p>
                <button  className="card-delete" onClick={props.deletar}><img src={trash}/></button>
            </div>
        </div>
    )
}

export default Card