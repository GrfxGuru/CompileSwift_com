import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import Helmet from "react-helmet"

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
        <Helmet bodyAttributes={{ style: "background-color : #2C4667" }} />
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
            <div style={{ width: "50%", marginTop: 40 }}>
              <form
                onSubmit={this._handleSubmit}
                style={{
                  textAlign: "Center",
                  backgroundColor: "#1C2D43",
                  borderRadius: 15,
                  paddingTop: 20,
                  paddingBottom: 60,
                }}
              >
                <div>
                  <h2 style={{ color: "White" }}>Get the Newsletter</h2>
                  <input
                    type="text"
                    onChange={this._handleChange}
                    placeholder="Your Name"
                    name="name"
                    style={{
                      width: "350px",
                      marginTop: 40,
                      padding: 10,
                      borderRadius: 10,
                      borderWidth: 0,
                    }}
                  />
                </div>
                <div>
                  <input
                    type="Email Address"
                    onChange={this._handleChange}
                    placeholder="email"
                    name="email"
                    style={{
                      width: "350px",
                      marginTop: 20,
                      padding: 10,
                      borderRadius: 10,
                      borderWidth: 0,
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: 350,
                    height: 50,
                    backgroundColor: "#079423",
                    borderStyle: "solid",
                    color: "white",
                    fontWeight: "bold",
                    alignItems: "center",
                    marginTop: 30,
                    marginBottom: 40,
                    borderRadius: 10,
                    borderWidth: 0,
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      marginTop: 7,
                    }}
                  >
                    Submit
                  </p>
                </button>
                <p
                  style={{
                    margin: "0 auto",
                    fontSize: 16,
                    textAlign: "center",
                    color: "#A6A6A6",
                    width: 380,
                  }}
                >
                  You will be sent a confirmation email and can unsubscribe at
                  anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Newsletter
