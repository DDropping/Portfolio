import React from "react"
import { motion } from "framer-motion"

import image from "../../../images/logo.png"
import Waves1 from "./Wave1"
import Waves2 from "./Wave2"
import Waves3 from "./Wave3"
import Waves4 from "./Wave4"
import Waves5 from "./Wave5"

const index = () => {
  return (
    <div>
      <Waves5 />
      <Waves4 />
      <Waves3 />
      <Waves2 />
      <Waves1 />
    </div>
  )
}

export default index
