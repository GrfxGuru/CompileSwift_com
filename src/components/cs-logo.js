import React from "react"

function CSLogo({ data }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={require("../assets/cs-logo-square-512.png")}
        width="50"
        height="50"
        alt="CompileSwift Logo"
      />
    </div>
  )
}

export default CSLogo
