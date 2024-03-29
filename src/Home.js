
import BlogList from "./Bloglist";
import UseFetch from "./useFetch";


function Home(){
   
 const{data:blogs,isPending,error}=UseFetch("http://localhost:8000/blogs")
 
    

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
        {  blogs &&  <BlogList  blogs={blogs} title="All blogs!"/>}
          
           
           
        </div>
    )
}


 export default Home;