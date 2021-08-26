import React from "react"
import { handleAuthentication } from "../utils/auth"

const Callback = () => {
  handleAuthentication()

  return <div class="loader"></div>
}

export default Callback