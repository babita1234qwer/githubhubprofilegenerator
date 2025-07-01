import React,{useState,useCallback,useEffect} from "react";
import ReactDOM from "react-dom/client";





function Body(){
    const [Profile,setProfile]=useState([]);
    const [numberofprofile,setnumeberofprofile]=useState("");
    const [name,setname]=useState('');
    async function generateprofile( num){
        const ran=Math.floor(1+Math.random()*10000);
        const response=await fetch(`https://api.github.com/users?since=${ran}&per_page=${num}`);
        const data=await response.json();
        const dat=name?data.filter(val=>val.login.toLowerCase()==name.toLowerCase()):data;
        setProfile(dat);

    }
    useEffect(()=>{
        generateprofile(10);
    },[])

    return (
   <div className="but">
    
    <input type="text" className="input" placeholder="Search number of profile" value={numberofprofile} onChange={(e)=>setnumeberofprofile(e.target.value)}>
    </input>
    <button onClick={()=>generateprofile(Number(numberofprofile))}>Search Profile</button>
   <div className="profile">
        {
            Profile.map((value)=>{
                return(
                <div key={value.id} className="cards">
                    <img src={value.avatar_url}></img>
                    <h2> {value.login}</h2>
                    <a href={value.html_url} target="_blank"> Profile </a>


                    </div>

             ) })
        }

    </div> </div>
    )
}
export default Body;