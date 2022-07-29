import Card from '../Card'
function List({listaTranactions, setListaTranactions}) {
    function deletar(id){
        const lista = listaTranactions.filter(item => item.id !== id);
        setListaTranactions(lista);
    }
    return listaTranactions.map((card, index) => {
        return <Card key={index} description={card.description} type={card.type} value={card.value} deletar={deletar}/>
    })
}
export default List