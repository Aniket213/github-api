import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './Random.css'

export default function Random() {
  const [randomusers, setrandomusers] = useState([]);

  useEffect(() => {
    axios.get(`https://api.github.com/users?page=1&per_page=100`)
    .then(res=>{
        setrandomusers(res.data);
    })
    .catch(err=>{
        console.log(err);
    })
  
  }, [])

  return (
    <div className='randombox'>
      {
        randomusers.map(a=>{
          return(
            <div className='user' key={a.avatar_url}>
              <div className="left">
                <img key={a.avatar_url} src={a.avatar_url} alt="sry" width="120px" />
              </div>
              <div className="right">
                <p key={a.id}>{a.login.charAt(0).toUpperCase() + a.login.slice(1)}</p>
                <button><a href={a.html_url} target="_blank" rel='noreferrer'>Visit</a></button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
