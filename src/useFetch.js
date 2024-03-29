
import { useState,useEffect } from "react"

const UseFetch=(url)=>{
    const[data,setdata]=useState(null) 
    const[isPending,setisPending]=useState(true)
    const[error,seterror]=useState(null)
    useEffect(()=> {
        fetch(url).then(res=> {
           console.log(res)
           if(!res.ok){
              throw  Error("could not fetch the data for that resource")
           }
            return  res.json()
        }).then(data=> {
         setdata(data)
         setisPending(false)
         seterror(null)
        }).catch((err)=>{
           setisPending(false)
            seterror(err.message)
        })
        },[url])
        return {data,isPending,error}
}
export  default UseFetch;