import React from "react"
import Afso from "../assets/aff-sa.png"
import Afdo from "../assets/aff-do.png"
import Afsrs from "../assets/swift-remote-studio.jpg"

const SideAffiliates = ({ source, alt }) => {
  return (
    <div>
      <a href="https://pw.d.pr/7f31K6" target="_blank">
        <img src={Afso} alt={"SetApp"} />
      </a>
      <a href="https://pw.d.pr/kOYVpQ" target="_blank">
        <img src={Afdo} alt={"DigitalOcean"} />
      </a>
    </div>
  )
}

export default SideAffiliates
