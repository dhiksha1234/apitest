import React,{useEffect,useState}from 'react';
import axios from "axios"; 
const Home = () => {
    const [data,setData] = useState("Hi");
    const [count, setCount] = useState(0);
    // calling api
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
         setData(res.data);
        console.log(data)
         
        })
        
    });
    // render function api details
    const render =(data) =>{
        console.log(data)
        if(data){
            return data.map((item) =>{
                return (
                    <>
                    <table>
                     
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.userId}</td>
                        <td>{item.completed}</td>
                        <td>{item.title}</td>
                    </tr>
                    </table>
                    </>
                )
            })
        }
        else{
            <h1>hello</h1>
        }
    }
      return(
        <div>
            {/* //simple increment button using useState */}
            <button onClick={() => {
                setCount(count+1);
            }}>Increment</button>
            
            <h1>{count}</h1>
            
              {render(data)} 
            
        </div>
    )
    
}   

export default Home;