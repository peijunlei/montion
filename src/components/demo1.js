import React, { PureComponent, useEffect, useState } from 'react';
import { Motion, spring ,presets} from 'react-motion';
const Demo1 = () => {
  const [left,setLeft] = useState(0)
  const handleChange=()=>{
    let targetX ;
    if(left === 0) {
      targetX = 200
    } else {
      targetX = 0
    }

    setLeft(targetX)
  }
 useEffect(()=>{
   setLeft(200)
 },[])
  return (
    <div className='container'>
      <Motion style={{ x: spring(left, presets.noWobble) }}>
        {interpolatingStyle => <div style={{ width:50,height:50,backgroundColor:'#09c', transform: `translateX(${interpolatingStyle.x}px)`}} className='box' />}
      </Motion>
      <button onClick={handleChange}>run</button>
    </div>
  )
}
export default Demo1