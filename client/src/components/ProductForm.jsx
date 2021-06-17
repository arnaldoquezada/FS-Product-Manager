import axios from "axios";
const { useState } = require("react");

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/products',{
            title,
            price,
            description
        })
            .then(res =>console.log(res))
            .catch(err =>console.log(err))
    }
    

    return(
        <form onSubmit = { onSubmitHandler } >
            <h1>Product Manager</h1>
            <section>
                <label>Title</label><br/>
                <input type="text" onChange = {(e) =>setTitle(e.target.value)}/>
            </section>
            <section>
                <label>Price</label><br/>
                <input type="text" onChange = {(e) =>setPrice(e.target.value)}/>
            </section>
            <section>
                <label>Description</label><br/>
                <input type="text" onChange = {(e) =>setDescription(e.target.value)}/>
            </section>
            <input type="submit" />
        </form>
    )

    
}