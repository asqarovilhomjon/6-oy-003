
import React from 'react'
import Mobail from '../mobail/Mobail'
import all from "../../assets/sav.avif"
import img from "../../assets/5.webp"
import img1 from "../../assets/image.png"


const Main = () => {
    let text = ["Galaxy Z Flip6", "Galaxy Z Fold6", " Galaxy Watch Ultra", " Galaxy Buds3 Pro", " Galaxy Experience"]
    let text1 = ["Galaxy Z Flip6", "Galaxy Z Fold6"]
    let btr = ["Lear more", "Buy now"]
  return (
    <div className='container'>
      <Mobail cl="#fff" matn={"Mobile & Computing"} nav={text} foto={all} button={btr}/>
      <Mobail cl="#fff" matn={"TV & Audio"} nav={text1} foto={img} button={btr} image={img}/>
      <Mobail cl="#fff" matn={" Home Appliances"} nav={text1} foto={img1} button={btr} image={img}/>
 
    </div>
  )
}

export default Main