import React from "react"
import { motion } from "framer-motion"

import "./waves.css"

const Wave5 = () => {
  return (
    <div class="custom-shape-divider-top-1596840126">
      <motion.svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/motion."
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        initial={{ x: "0px" }}
        animate={{ x: ["-1500px", "0px", "-1500px"] }}
        transition={{
          duration: 50,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
          repeatDelay: 0,
        }}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </motion.svg>
    </div>
  )
}

export default Wave5
