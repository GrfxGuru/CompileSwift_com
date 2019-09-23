import React from "react"

function sidebar (){
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <a href={"https://patreon.com/pwcom"}>
        <div style={{
          display: 'flex',
          color: 'white',
          backgroundColor: "#f57738",
          width: 300,
          height: 50,
          marginBottom: 40,
          marginTop: 20,
          padding: 10,
          borderRadius: 10,
          justifyContent: "center",
        }}>
          <p>Support This Site on Patreon</p>
        </div>
      </a>
    </div>
  )
}

export default sidebar
