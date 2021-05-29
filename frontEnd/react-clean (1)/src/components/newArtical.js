import react, { useState } from 'react'
import axios from 'axios'
export const NewArtical = ({ token }) => {
    const [title, setTitle] = useState("")
    const [description,setDescription]=useState("")
    const [message,setMessage]=useState("")

    const NewArticalbutton = () => {
axios.post(`http://localhost:5000/articles`,
{title,description},
{headers: {
    'Authorization':`Bearer ${token}`
    }}).then((result)=>{
        if(result.data._message=="Articles validation failed"){
            setMessage(<p>Error happened while creating a new article, please try again</p>)

        } else{
            setMessage(<p>The article has been created successfully</p>);
        }
       
    })
    }
    return (
        <div style={{width :"200px"}}>
            <input
                type="text"
                placeholder="tital here"
                onChange={(e) => {
                    setTitle(e.target.value)
                }} />
            <input
                style={{ width: "100px", height: "150px" }}
                type="text"
                placeholder="article description here"
                onChange={(e) => {
                    setDescription(e.target.value)
                }} />
                <button onClick={NewArticalbutton}>New Artical</button>
                {message}
        </div>
    )
}