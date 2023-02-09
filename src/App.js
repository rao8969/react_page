//import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import tryer from 'tryer';

// function App() {
//   const [data,setData]=useState([]);

//   const getData=async()=>{
//     try {
//       let data=await fetch(`https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10
//       `)
//       data=await data.json();
//       console.log(data);
//       setData(data);
//     } catch (err) {
//       console.log(err);
//     }
//   }
  
//   return (
//     <div className="App">
//      <h1>Todo</h1>
//      <button onClick={getData}>Fetch</button>
//      <div>
//      {
//        data.map(todo=>
//          <div style={{display:"flex",gap:"1rem",margin:".5rem"}} key={todo.id}>
//          <div>{todo.id}</div>
//          <div>{todo.title}</div>
//          <div>{todo.status?"Done":"Not Done"}</div>
//          </div>
//        )
//      }
//      </div>
//     </div>
//   );
// }

// export default App;

// function App(){
//   const [count,setCount]=useState(0);
// const handleChange=()=> {
//   setCount(count+1)
// }
// useEffect(
//   function callback(){
//     document.title=`Clicked ${count} times`
//   },[count]
// )
//   return(
//   <div className='App'>
//   <h2>Count:{count}</h2>
//   <button onClick={handleChange}>Increment</button>
//   </div>
//   )
// }
// export default App;



// function App() {
//       const [data,setData]=useState([]);
//       const[page,setPage]=useState(1)
    
//       const getData=async(p=1)=>{
//         try {
//           let data=await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10
//           `)
//           data=await data.json();
//           console.log(data);
//           setData(data);
//         } catch (err) {
//           console.log(err);
//         }
//       }
//       useEffect(()=>{
//         getData(page)
//       },[page])
      
//       return (
//         <div className="App">
//          <h1>Todo</h1>
//          <button disabled={page===1} onClick={()=>(setPage(page=> page-1))}>prev</button>
//          <span style={{padding:".5rem"}}>{page}</span>
//          <button onClick={()=>(setPage(page=> page+1))}>next</button>
//          <button onClick={getData}>Fetch</button>
//          <div>
//          {
//            data.map(todo=>
//              <div style={{display:"flex",gap:"1rem",margin:".5rem"}} key={todo.id}>
//              <div>{todo.id}</div>
//              <div>{todo.title}</div>
//              <div>{todo.status?"Done":"Not Done"}</div>
//              </div>
//            )
//          }
//          </div>
//         </div>
//       );
//     }
    
//     export default App;



function App(){
const[data,setData]=useState([])
const[page,setPage]=useState(1)
const[loading,setLoading]=useState(false);

const getData=async(p=1)=>{
  try {
    setLoading(true);
  let data=await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
  data=await data.json();
  console.log(data)
  setData(data);
  setLoading(false);

  } catch (err) {
    setLoading(false);
    console.log(err)

  }
}
useEffect(()=>{
getData(page)
},[page]);

  return(
  <div className='App'>
  <h2>Todos</h2>
  <button style={{marginBottom:"1rem"}} onClick={getData}>Fetch</button><br/>
  <button
  style={{
    backgroundColor:"blue",
   color:"white",
   border:"none",
   padding:".5rem",
   textContent:"bold",
   borderRadius:"5px"
}}
   disabled={page===1}
    onClick={()=>setPage(page=>page-1)}
    >prev
    </button>
  <span style={{padding:".5rem"}}>{page}</span>
  <button 
  style={{
    backgroundColor:"blue",
   color:"white",
   border:"none",
   padding:".5rem",
   textContent:"bold",
   borderRadius:"5px"
}} 
  onClick={()=>setPage(page=>page+1)}
  >Next
  </button>
  <div>
  {loading && <h1>Loading...</h1>}
  </div>
  <div>
  {
    data.map(todo=>
      <div style={{display:"flex",gap:"1rem",margin:".5rem"}} key={todo.id}>
      <div>{todo.id}</div>
      <div>{todo.title}</div>
      <div>{todo.status?"Done":"Not Done"}</div>
      </div>
      )
  }
  </div>
  </div>
  )
}

export default App;
