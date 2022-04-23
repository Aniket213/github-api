import React, {useState, useEffect} from 'react'
import './Card.css'
import Dark from './Dark'
import axios from 'axios'

export default function Card(props) {
  const [repos, setrepos] = useState([]);

  useEffect(() => {
    axios.get(props.users.repos_url)
    .then(res=>{
      setrepos(res.data);
      // console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
  }, [props.users.repos_url])


  return (
    <Dark>
    <div className='card'>
        <div className='closebtn' onClick={()=>{props.setpopup(false)}}><i class="fa-solid fa-xmark"></i></div>

        <div className="box">
          <div className="photo">
            <img src={props.users.avatar_url} alt="sry not available" width="350px" />
            <div className="photoinfo">
              <div className="name headname">Name : </div>
              <div className="realname">{props.users.name}</div>
              <div className="loc headname">Location : </div>
              <div className="realloc">{props.users.location}</div>
              <div className="com headname">Company : </div>
              <div className="realcom">{props.users.company}</div>
            </div>
            <a href={props.users.html_url} target="_blank" rel='noreferrer' className='atagincard'>Visit</a>
          </div>

          <div className="info">
            <div className="first infoboxes">
              <h2 key={props.users.login}>{props.users.login.charAt(0).toUpperCase() + props.users.login.slice(1)}</h2>
              <p>{props.users.bio}</p>
            </div>

            <div className="secondinfo infoboxes">
              <h2 className='thirdheading'>Info</h2>
              <div className="second">
                <div className="followers secondparent mb">
                  <div className="big">Followers</div>
                  <div className="small">{props.users.followers}</div>
                </div>
                <div className="following secondparent mb">
                  <div className="big">Following</div>
                  <div className="small">{props.users.following}</div>
                </div>
                <div className="repos secondparent mb">
                  <div className="big">Repos</div>
                  <div className="small">{props.users.public_repos}</div>
                </div>
                <div className="gists secondparent">
                  <div className="big">Gists</div>
                  <div className="small">{props.users.public_gists}</div>
                </div>
                <div className="created secondparent">
                  <div className="big">Created</div>
                  <div className="small">{props.users.created_at.slice(0, 4)}</div>
                </div>
                <div className="updated secondparent">
                  <div className="big">Updated</div>
                  <div className="small">{props.users.updated_at.slice(0, 4)}</div>
                </div>
              </div>
            </div>

            <div className="third infoboxes">
              <h2 className='thirdheading'>Repos</h2>
              <div className="thirdrepos">
                {
                  repos.map(a=>{
                    return (
                      <div className='singlerepo'>
                        <h4><a href={a.html_url} target="_blank" rel='noreferrer'>{a.name.charAt(0).toUpperCase() + a.name.slice(1)}</a></h4>
                        <p>{a.description}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>

    </div>
    </Dark>
  )
}
