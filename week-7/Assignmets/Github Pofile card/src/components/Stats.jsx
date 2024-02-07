import React from 'react'

function Stats({data}) {
  return (
    <div className='Stats'>
        <div>
            <h3>Followers</h3>
            <p>{data.followers}</p>
        </div>
        <div>
            <h3>Following</h3>
            <p>{data.following}</p>
        </div>
        <div>
            <h3>Public Repos</h3>
            <p>{data.public_repos}</p>
        </div>
    </div>
  )
}

export default Stats