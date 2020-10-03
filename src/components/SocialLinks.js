import React from "react"

function socialLinks (){
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      color: 'white'
    }}>
      <a style={{color: 'white'}} href={"https://twitter.com/compileswift"}><p>Twitter &nbsp;&nbsp;</p></a>
      <a style={{color: 'white'}} href={"https://instagram.com/compileswift"}><p>Instagram &nbsp;&nbsp;</p></a>
      <a style={{color: 'white'}} href={"https://patreon.com/compileswift"}><p>Patreon &nbsp;&nbsp;</p></a>
      <a style={{color: 'white'}} href={"https://t.me/cswiftchat"}><p>Telegram</p></a>
    </div>
  )
}

export default socialLinks
