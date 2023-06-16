import React, { useEffect, useState } from 'react'
import ScrollToTop from "react-scroll-to-top";



const BackToTopButton = () => {

  // const [backButton , setBackButton] = useState(false)

  // useEffect(()=>{
  //   window.addEventListener("scroll", ()=>{
  //     if(window.scrollY > 100){
  //       setBackButton(true)
  //     }
  //     else{
  //       setBackButton(false)
  //     }
  //   })
  // }, [])


  // const scrollUp = ()=>{
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   })
  // }

  return (
    <div>
      <ScrollToTop smooth backgroundColor='yellow' 
      />


      {/* {
        backButton && (
          <button style={{position: 'fixed', width: '50px', height: '50px'}}>^</button>
        )
      }       */}
    </div>
  )
}

export default BackToTopButton
