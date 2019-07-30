import React from "react"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

export default () => (
  <Layout title="CompileSwift Thanks You">
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingLeft: rhythm(1),
        paddingRight: rhythm(1),
      }}
    >
      <div style={{ maxWidth: rhythm(27) }}>
        <h1>Thank you!</h1>
        <p>
          We try to respond as quickly as possible, we appreciate your
          patience.
        </p>
      </div>
    </div>
  </Layout>
)
