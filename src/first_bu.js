
// import React,{useEffect,useState}from 'react';
// import axios from "axios"; 
// const Home = () => {
//     const [data,setData] = useState([]);
//     // const [count, setCount] = useState(0);
//     //calling api
//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/todos")
//         .then((res) => {
//          setData(res.data);
//         //  console.log(data)
         
//         })
        
//     });
//     // render function api details
//     // const render =(data) =>{
//     //      console.log(data)
//     //      if(data){
//     //         //Object.keys(data).map((item )=> {

//     //       {data.map((item,index) =>{
//     //             return (
//     //                 <>
//     //                 <tr key="{index}" data-testid={`user-${index}`}>
//     //                     <td>{item.id}</td>
//     //                     <td>{item.userId}</td>
//     //                     <td>{item.completed}</td>
//     //                     <td>{item.title}</td>
//     //                 </tr>
                    
//     //                 </>
//     //             )
//     //         })}
//     //     }
//     //     else{
//     //         <h1>hello</h1>
//     //     }
//     //  }
//       return(
//         <>
//         <div>
//             {/* //simple increment button using useState */}
//             {/* <button onClick={() => {
//                 setCount(count+1);
//             }}>Increment</button>
            
//             <h1>{count}</h1> */}
//             <h1>Hello</h1>
//             {/* <table>{render(data)}</table>  */}
//               {data.map((item,index) =>{
//                 return (
//                     <>
//                     <tr key="{index}" data-testid={`user-${index}`}>
//                         <td>{item.id}</td>
//                         <td>{item.userId}</td>
//                         <td>{item.completed}</td>
//                         <td>{item.title}</td>
//                     </tr>
                    
//                     </>
//                 )
//             })}
            
//         </div>
//         </>
//     )
    
// }   

// export default Home;