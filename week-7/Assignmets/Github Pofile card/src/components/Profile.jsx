import React from 'react'
import xlogo from '../assets/xlogo.jpg'
import gitLogo from '../assets/githubLogo.png'

function Profile({data}) {
  return (
    <div className='profile'>
        <div className="upper"></div>
        <div className='profileImage' style={{backgroundImage: `url(${data.avatar_url})`}}></div>
        <div className="lower">
            <div className='name'>{data.name}</div>
            <div className="username">
                <a href={`https://github.com/${data.login}`}>
                    <img src={gitLogo} alt="Github logo" />
                    {data.login}
                </a>    
            </div>
            <div className="twitter">
                <a href={`https://twitter.com/${data.twitter_username}`}>
                    <img src={xlogo} alt="X Logo" />
                    {data.twitter_username}
                </a>
            </div>
        </div>
    </div>
  )
}

export default Profile