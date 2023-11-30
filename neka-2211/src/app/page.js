'use client';

import axios from "axios";
import { useEffect, useState } from "react";

const page = () => {

  const api = "http://localhost:3000/data"



  const [data,setData] = useState([])


  async function get(){
try {
  let {data} = await axios.get(api)
  setData(data)
} catch (error) {
  
}
  }


  async function deleteTodo(id){
    try {
      let {data} = await axios.delete(`${api}/${id}`)
      get()
    } catch (error) {
      
    }
  }


  async function add(){
    try {
      let user = {
        title:title
      }
      let {data} = await axios.post(api,user)
      get()
    } catch (error) {
      
    }
  }

  async function edit(id){
    try {
      let obj = {
        title:text
      }
      let {data} = await axios.put(`${api}/${id}`,obj)
      get()
    } catch (error) {
      
    }
  }
  const [modal,setModal] = useState(false)
  const [text,setText] = useState("")
  const [idx,setIdx] = useState(null)


  const [title,setTitle] = useState("")

  useEffect(()=>{
    get()
  },[])

  return (
    <div className="">
      <h1 onClick={()=>alert("Hello world")}>Page</h1>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
      <button onClick={()=>add()} >Add</button>
      {
      data.map((elem)=>{
        return (
          <div>
            <h1>{elem.title}</h1>
            <button onClick={()=>deleteTodo(elem.id)}>Del</button>
            <button onClick={()=>{
              setModal(true)
              setText(elem.title)
              setIdx(elem.id)
            }}>Edit</button>
          </div>
        )
      })
      }
      {
        modal ? (
          <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={()=>edit(idx)}>Save</button>
          </div>
        ):null
      }
      </div>
  )
}

export default page