import { useState } from "react";
import './form.css'
function Form({listaTranactions, setListaTranactions}){
    const [itemDescription, setItemDescription] = useState('');
    const [itemValue, setItemValue] = useState('');
    const [itemType, setItemType] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100),
            description: itemDescription,
            type: itemType,
            value: itemValue
        }
        console.log(newTransaction);
        setListaTranactions([...listaTranactions, newTransaction]);
        setItemDescription('');
        setItemValue('');
        setItemType('');
    }
    return(
        <form
        className="form-container"
        onSubmit={handleSubmit}
        >
            <div className="div-container">
            <label>Descrição</label>
                <input type="text" value={itemDescription} onChange={(e) => setItemDescription(e.target.value)}/>
            </div>
            <div className="value">
                <div className="value-entrada">
                    <label>Valor</label>
                    <input className="descriptions" type="number" value={itemValue} onChange={(e) => setItemValue(e.target.value)}/>
                </div>
                <div className="value-type">
                    <label>Tipo de entrada</label>
                    <select value={itemType} onChange={(e) => setItemType(e.target.value)}>
                        <option value="" hidden>Selecione uma opção</option>
                        <option value="Entrada">Entrada</option>
                        <option value="Saida">Saida</option>
                    </select>
                </div>
            </div>
            <button className="button-form"type="submit">Inserir Valor</button>
        </form>
    )
}
export default Form;