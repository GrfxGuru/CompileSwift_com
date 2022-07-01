import React from "react"
import { scale, rhythm } from "../utils/typography"
import { Link } from "gatsby"
import { white } from "ansi-colors"
import { Card, CardContent } from "ui-neumorphism"
import "ui-neumorphism/dist/index.css"

function StaticPostCard({ title, summary, url, watermarkImage }) {
  return (
    <Link
      style={{
        boxShadow: `none`,
        color: "#ffffff",
        fontWeight: "bold",
      }}
      to={url}
    >
      <Card rounded width={390} style={{
        backgroundColor: "rgb(255, 249, 243)",
        borderStyle:"solid",
        borderWidth: 1,
        borderColor: "#f57738",
        maxWidth: 390,
        minWidth: 390,
        minHeight: 200,
        maxHeight: 200,
        margin: 10,
      }}>
        <CardContent style={{backgroundColor: "rgb(255, 249, 243)"}}>
          <div
            style={{
              margin: "20px 10px 20px 10px",
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
                color: "black",
                fontWeight: "normal",
              }}
            >
              {summary}
            </p>
            <br />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default StaticPostCard
