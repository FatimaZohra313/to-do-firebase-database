import { useEffect, useState } from "react";
import Button from "./component/Button";
import { senttodos } from "../config/firebasemethod";
import { getDatabase, ref, onValue, set} from "firebase/database";





function Todo() {
    let [txt,settxt] = useState("");
    let [list,setList] = useState([]);
    let [key,setKey] = useState([]);
    const db = getDatabase();

    // let txt = ""
    // let list = [];


    function getTodo(){
      const starCountRef = ref(db, 'todos/');
     onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      setList([...Object.values(data)])
      setKey([...Object.keys(data)])
  
});




    }


useEffect(()=>{
  getTodo();
},[])

    
    
    
      function add(){
        senttodos({txt})
        // list.push(txt)
        // console.log(list);
        // setList([...list])
        settxt("");
      }
      function del(i){
        // const txtList = [...list];
        set(ref(db, "todos/") , {txt : null})
        list.splice(i,1)
        setList([...list])
        // txt=("");
        
    
      }
      function edit(i){
        let a = prompt("Enter new text","YOU ARE CUTE");
        set(ref(db, "todos/") , {txt : a})

        
        list[i] = txt;


        // settxt(a)
        setList([...list])

        
        // settxt([...txt]
        // )
        
        
    
      }
      function remove(){
        set(ref(db, "todos") , {txt : null})
      // list = "";
      setList([]);
      } 
       return (
        <div className="App">
          <header className="App-header">
            <h1>TO DO App</h1>
            {/* <h1>Fatima zohra</h1>
            <p>hello world</p>
            <p>the square of {c} is {c*c}</p> */}
            <input className='no' onChange={(e)=> {
              settxt(e.target.value);
              ;
            }} value={txt}/>     
            <button className='btn btn-secondary mt-3' onClick={add}>ADD</button> 
            <button className='btn btn-secondary mt-3' onClick={remove}>Remove all</button> 
            {/* <Button btnValue = "abc" className='yes'/>   */}
            {/* <Button btnValue = "abc" className='no'/>   */}
<ul>
{list.map((e,i)=> {
 return <li className="mt-3" style = {{
    // color: "blue",
    // backgroundColor: "lightcyan",
    }}
    key={key[i]}>{e.txt}
    <Button btnValue="Delete" className="btn btn-secondary  ms-3" click={()=>del(key[i])}/>
    <Button btnValue="Edit" className="btn btn-secondary  ms-3" click={()=>edit(key[i])}  />
    </li>
    
              })}
            </ul>
          </header>
        </div>
      );
    }
    
    export default Todo;