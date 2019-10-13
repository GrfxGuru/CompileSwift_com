import React from "react"
import { scale, rhythm } from "../utils/typography"
import { Link } from "gatsby"

function StaticPostCard({ title, summary, url }) {
  return (
    <Link
      style={{
        boxShadow: `none`,
        color: "#ffffff",
        fontWeight: "bold",
      }}
      to={url}
    >
      <div
        style={{
          maxWidth: 400,
          minWidth: 400,
          minHeight: 220,
          maxHeight: 220,
          borderStyle: "none",
          borderRadius: 10,
          margin: "20px 10px 20px 10px",
          paddingLeft: 10,
          paddingRight: 10,
          boxShadow: "0px 0px 10px 0 rgba(0,0,0,0.3)",
          backgroundColor: "rgb(99, 54, 50)",
        }}
      >
        <h3
          style={{
            ...scale(1 / 1.7),
            marginBottom: rhythm(1 / 4),
            marginTop: 3,
          }}
        >
          {title}
        </h3>
        <br />
        <p
          style={{
            ...scale(0 / 5),
            color: "white",
            fontWeight: "normal",
          }}
        >
          {summary}
        </p>
        <br />
      </div>
    </Link>
  )
}

export default StaticPostCard
