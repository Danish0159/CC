import React from "react"
import { silentAuth } from "./src/utils/auth"
import "./src/assets/css/bootstrap.min.css"
import "./src/assets/css/normalize.css"
import "./src/assets/css/style.css"
import "./src/assets/css/responsive.css"
import "aos/dist/aos.css";
// < !--jQuery -->
// import "./src/assets/js/vendor/jquery-3.2.1.min"
// < !--modernizr -->
// import "./src/assets/js/vendor/modernizr-3.5.0.min"
// < !--Bootstrap Popper-- >
// import "./src/assets/js/popper"
// < !--Bootstrap -->
// import "./src/assets/js/bootstrap.min"
// < !--Custom Scripts-- >
// import "./src/assets/js/main"
// < !--Owl Carousel JS-- >
// import "./src/assets/js/owl.carousel.min"
// < !--Aso Animation-- >
// import "aos/dist/aos"



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
