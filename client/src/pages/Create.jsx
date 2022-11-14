import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const navigate = useNavigate()

    // STATE
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState(false)

    const [errors, setErrors] = useState([]); 

    const createProduct = (e) => {
        e.preventDefault()
        // CREATE BODY TO SENT OVER TO API
        let body = {
            "title" : title,
            "price" : price,
            "description" : description
        }
        // MAKE A AXIOS REQUEST TO MY API
        axios.post("http://localhost:8000/api/products", body)
            .then(res => {
                console.log(res.data)
                setTitle("")
                setPrice("")
                setDescription(false)
                navigate("/products")
            })
            .catch(err=>{
                console.log(err);
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <fieldset>
            <legend>Create.jsx</legend>
            <form onSubmit={createProduct}>
                <p>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </p>
                <p>
                    Price:
                    <input type="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    Description?
                    <input type="text" onChange={(e) => setDescription(e.target.value)} />
                </p>
                <button>Submit</button>
            </form>
            {
                errors.map((error) => <p>{error}</p>)
            }
        </fieldset>
    )
}

export default Create