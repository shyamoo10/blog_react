import { useState } from "react";
import { useNavigate } from "react-router-dom";
  
const Create=()=>{
    const[title,setTitle]=useState("")
    const[body,setBody]=useState("")
    const[author,setAuthor]=useState("mario")
    const[ispending,setispending]=useState(false)
    const Navigate=useNavigate()

    const handleSubmit=(e)=>{
       e.preventDefault()
       const blog={title,body,author}
       setispending(true)
      fetch("http://localhost:8000/blogs",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(blog)
      }).then(()=> {
        console.log("new blog added")
         setispending(false)
        Navigate('/')
      })
    }
    return(
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text"  value={title}   onChange={(e)=>  setTitle(e.target.value)}  required></input>
                <label>Blog body:</label>
              <textarea required value={body}  onChange={( e)=> setBody(e.target.value)}>
                
              </textarea>
              <label>Blog author:</label>
              <select value={author}  onChange={(e)=> setAuthor(e.target.value)}>
                <option  value="mario">mario</option>
                <option value="yoshi">yoshi</option>
              </select>
             {!ispending && <button>Add Blog</button>}
             {ispending && <button disabled>Adding blog...</button>}
              <p>{title}</p>
              <p>{body}</p>
              <p>{author}</p>
              
            </form>
        </div>
    )
}
export default Create;