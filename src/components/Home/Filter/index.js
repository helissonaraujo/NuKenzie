import './filter.css';
function Filter(){
    return(
        <section className="filter-container">
            <div className="filter-header">
                <h1>Resumo Fincnaceiro</h1>
            </div>
            <div className="filter-button">
                <button className='filter-btn'>Todos</button>
                <button className='filter-btn'>Entrada</button>
                <button className='filter-btn'>Saida</button>
            </div>
        </section>

    )
}
export default Filter;