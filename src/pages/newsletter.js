import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class Newsletter extends React.Component {
  state = {
    name: null,
    email: null,
  }

  _handleChange = e => {
    console.log({
      [`${e.target.name}`]: e.target.value,
    })
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        if (result !== "success") {
          throw msg
        }
        alert("There was a problem subscribing to the mailing list.")
        //alert(msg)
      })
      .catch(err => {
        alert(
          "There was a problem subscribing that email address. You may already be subscribed."
        )
      })
  }

  render() {
    const maxWidth = rhythm(27)
    return (
      <Layout
        location={this.props.location}
        title="CompileSwift.com NewsLetter"
      >
        <SEO
          title="CompileSwift Newsletter"
          keywords={[`blog`, `swift`, `newsletter`]}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingLeft: rhythm(1),
            paddingRight: rhythm(1),
          }}
        >
          <div
            style={{
              width: "100%",
              marginTop: 20,
              flexDirection: "row",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div>
              <div>
                <p>Just enter your name and email address to signup.</p>
                <p>
                  You will recieve an email to confirm your permission to send
                  you the emails.
                </p>
                <p>You can unsubscribe at anytime.</p>
              </div>
              <form onSubmit={this._handleSubmit}>
                <div style={{ margin: 30 }}>
                  <input
                    type="text"
                    onChange={this._handleChange}
                    placeholder="name"
                    name="name"
                  />
                </div>
                <div style={{ margin: 30 }}>
                  <input
                    type="email"
                    onChange={this._handleChange}
                    placeholder="email"
                    name="email"
                  />
                </div>
                <input type="submit" style={{ marginLeft: 30 }} />
              </form>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Newsletter
