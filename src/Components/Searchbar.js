import React,{useState} from "react";
import "./Searchbar.css";

export default function Searchbar(props) {
    const [query, setquery] = useState("");
    const [toshow, settoshow] = useState(false);

    const clickhandler = ()=>{
        settoshow(!toshow);
    }
    const submithandler = (e)=>{
        e.preventDefault();
        props.setpopup(true);
    }

    props.fun(query);

  return (
    <div className="searchbar">
      <h1 className="heading">GitHub Users</h1>
      <form id="content" onSubmit={submithandler} autoComplete="off">
        <input type="text" name="input" className = {`input ${ toshow ? "square" : "" }`} id="search-input" onChange={(e)=>setquery(e.target.value)}/>
        <button type="reset" className = {`search ${ toshow ? "close" : "" }`} id="search-btn" onClick={clickhandler}></button>
      </form>
    </div>
  );
}
