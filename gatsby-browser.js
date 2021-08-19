import React from "react"
import { silentAuth } from "./src/utils/auth"

import "./src/assets/css/bootstrap.min.css"
import "./src/assets/css/normalize.css"
import "./src/assets/css/style.css"
import "./src/assets/css/responsive.css"
import "aos/dist/aos.css";
// import "/src/assets/js/main.js"
// import "/src/assets/js/popper.js"
// import "/src/assets/js/owl.carousel.min.js"


class SessionCheck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  handleCheckSession = () => {
    this.setState({ loading: false })
  }

  componentDidMount() {
    silentAuth(this.handleCheckSession)
  }

  render() {
    return (
      this.state.loading === false && (
        <React.Fragment>{this.props.children}</React.Fragment>
      )
    )
  }
}

export const wrapRootElement = ({ element }) => {
  return <SessionCheck>{element}</SessionCheck>
}