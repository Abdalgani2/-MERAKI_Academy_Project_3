import react,{useEffect,useState} from 'react';
import axios from 'axios'
export const Dashbord =()=>{
  const [articales,setArticales]=useState("") 
  const [allArticales,setAllArticales]=useState("")
  useEffect(() => {
    axios.get(`http://localhost:5000/articles`).then((res) => {
      setArticales(res.data);
    });
  }, []);
 const getallarticalbutton =()=>{
   console.log("run fun butt")
   setAllArticales( articales.map((artical,i) => {
       {console.log(artical.title)}
        return <div style={{width :'50%'}}key={artical.id}> {artical.title}{artical.description}</div>;
      }))
    
 }
        return (
            <div style={{ border: " 5px solid green" }}>
              <p>dashbord</p>
              <button onClick={getallarticalbutton} > get all artical</button>
               {allArticales}
            </div>
          );
}