import React,{useEffect,useState}from 'react';
import axios from "axios"; 
const Home = () => {
    const [data,setData] = useState([]);
     //calling api
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
         setData(res.data);
        })
        
    });
     
    
      return(
        <>
        <div>
            <h1>Hello</h1>
               {data.map((item,index) =>{
                return (
                    <>
                    <tr key="{index}" data-testid={`user-${index}`}>
                        <td>{item.id}</td>
                        <td>{item.userId}</td>
                        <td>{item.completed}</td>
                        <td>{item.title}</td>
                    </tr>
                    
                    </>
                )
            })}
            
        </div>
        </>
    )
    
}   

export default Home;