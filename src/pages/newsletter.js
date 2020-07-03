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
      <Layout location={this.props.location} title="CompileSwift.com">
        <SEO
          title="CompileSwift Newsletter"
          keywords={[`blog`, `swift`, `newsletter`]}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            paddingLeft: rhythm(1),
            paddingRight: rhythm(1),
          }}
        >
          <div
            style={{
              width: "100%",
              marginTop: 30,
              flexDirection: "row",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "50%" }}>
              <div>
                <h2>Signup for the newsletter</h2>
                <p>
                  Want to stay up to date with the World of Swift and Apple
                  development?
                </p>
                <p>
                  This occasional email newsletter is just the thing for you.
                </p>
                <ul>
                  <li>News</li>
                  <li>Tips</li>
                  <li>videos</li>
                  <li>Podcast Episodes</li>
                  <li>Useful tools and more</li>
                </ul>
                <p style={{ marginTop: 30 }}>
                  You will recieve an email to confirm your permission to send
                  you emails after submitting the form.
                </p>
              </div>
              <form
                onSubmit={this._handleSubmit}
                style={{ textAlign: "Center" }}
              >
                <div>
                  <input
                    type="text"
                    onChange={this._handleChange}
                    placeholder="Your Name"
                    name="name"
                    style={{ width: "350px", marginTop: 20, padding: 5 }}
                  />
                </div>
                <div>
                  <input
                    type="Email Address"
                    onChange={this._handleChange}
                    placeholder="email"
                    name="email"
                    style={{ width: "350px", marginTop: 20, padding: 5 }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: 350,
                    height: 50,
                    backgroundColor: "#f57738",
                    borderStyle: "solid",
                    color: "white",
                    fontWeight: "bold",
                    borderColor: "#f57738",
                    alignItems: "center",
                    marginTop: 30,
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      marginTop: 6,
                    }}
                  >
                    Submit
                  </p>
                </button>
              </form>
              <p style={{ marginTop: 40, fontSize: 14, textAlign: "center" }}>
                You can unsubscribe at anytime.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Newsletter
