import React from 'react'; 


const SearchMovie = ()=>{

   // const [query,setQuery] = useState(''); 

    const searchmovies = (e)=>{
        e.preventDefaulut(); 

        alert("It worked"); 

    }
return(
<div>
<h2> This worked </h2>
<form className="form" onSubmit={searchmovies}>
<label htmlFor="query"> Search </label> <input type="text"  name="query" placeholder="Please enter movie to be searched"></input>
<br></br>
<br></br>
<button type="submit" value="Go"> Submit</button>
</form>

</div>

)


}

export default SearchMovie; 