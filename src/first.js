import React,{useEffect,useState}from 'react';
import axios from "axios"; 
const Home = () => {
    const [count, setCount] = useState(0);
    const [data,setData] = useState([]);
     //calling api
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
         setData(res.data);
         console.log(data)

         })
        
    });
     
    
      return(
        <>
        <div>
               {/* //simple increment button using useState */}
             <button onClick={() => {
                setCount(count+1);
           }}>Increment</button>
            
           <h1>{count}</h1> 
            <h1>Hello</h1>
            <table>
                <thead>
                    Table
                </thead>
                <tbody>
 
               {data.map((item,index) =>{
                return (
                    <>
                    <tr key="{index}" data-testid={`user-${index}`}>
                        <td>{item.id}</td>
                        <td>{item.userId}</td>
                        <td>{item.title}</td>
                        <td>{item.completed}</td>
                    </tr>
                    </>
                )
            })}
                </tbody>
            </table>
            
        </div>
        </>
    )
    
}   

export default Home;