import React from 'react'
import './rightbar.css'
import { Users } from '../../../dummyData'
import OnlineFriends from '../onlineFriends/OnlineFriends'

const Rightbar = ({profile}) => {
  const HomeRightbar =()=>{
    return(
    <>
      <div className="birthdayContainer">
        <img src="src\assets\person\gift.png" alt="" className="birthdayImg" />
        <span className="birthdayText">
        <b>Dipika</b> and <b>23 other friends</b> have a bithday today.
        </span>
      </div>
          <img src="src\assets\person\image.png" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map((u)=>(
            <OnlineFriends key={u.id} user={u}/>
           ))}            
            
          </ul>
    </>
    )
  } 
  const ProfileRightbar = ()=>{
    return(
    <>
       <h4 className='rightbarTitle'>User Information</h4>
       <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">
            City : 
          </span>
          <span className="rightbarInfoValue">Pune</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">
            From : 
          </span>
          <span className="rightbarInfoValue">ABCD</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">
            Relationship : 
          </span>
          <span className="rightbarInfoValue">Single</span>
        </div>
       </div>
       <h4 className="rightbarInfoItem">User Friends</h4>
       <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="src\assets\person\6.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">JOHN</span>
        </div>
        <div className="rightbarFollowing">
          <img src="src\assets\person\6.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">JOHN</span>
        </div>
        <div className="rightbarFollowing">
          <img src="src\assets\person\6.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">JOHN</span>
        </div>
        <div className="rightbarFollowing">
          <img src="src\assets\person\6.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">JOHN</span>
        </div>
        <div className="rightbarFollowing">
          <img src="src\assets\person\6.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">JOHN</span>
        </div>
        <div className="rightbarFollowing">
          <img src="src\assets\person\6.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">JOHN</span>
        </div>
        <div className="rightbarFollowing">
          <img src="src\assets\person\6.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">JOHN</span>
        </div>
       </div>
    </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/>: <HomeRightbar/>}
        </div>
      </div>
   
  )
}

export default Rightbar
