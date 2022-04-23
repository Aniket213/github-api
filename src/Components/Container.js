import React, {useState, useEffect} from 'react'
import './Container.css'
import Card from './Card'
import axios from 'axios'
// https://api.github.com/users?page=1&per_page=100
// `https://api.github.com/users/${props.query}`
export default function Container(props) {
    const [users, setusers] = useState([]);

    useEffect(() => {
      axios.get(`https://api.github.com/users/${props.query}`)
      .then(res=>{
          setusers(res.data);
      })
      .catch(err=>{
          console.log(err);
      })
    
    }, [props.query])
    // console.log(props.setpopup);
    
  return (
    <div className='container'>
        { props.popup && <Card users={users} setpopup={props.setpopup}/>}
    </div>
  )
}
