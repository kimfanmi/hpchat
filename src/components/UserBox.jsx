import React from 'react'

const UserBox = ({user, att}) => {
  const baseAtt = { style:{border:'1px solid black'}};
  return (
    <div {...baseAtt}{...att}>
      {user.name}||{user.help}||{user.state}
    </div>
  )
}

export default UserBox