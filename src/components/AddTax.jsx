
const AddTax = (props) =>
{
    const value = props.value || 0;
    const tax = props.tax || 0;

    return (
        <div>Totale IVA inclusa: ${ (value * ((tax + 100)/100)).toFixed(2) }</div>
    ); 
}

export default AddTax;