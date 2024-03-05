// This is for onClick background color change
// import { useState } from "react";
// import './App.css'
// function App ()
// {
//   const [background, setBackground] = useState('#000000')
//   function change()
//   {
//     console.log(Math.round(Math.random() * 10000000).toString(16))
//     const random_color = "#" + Math.round(Math.random() * 10000000).toString(16);
//     console.log(random_color)
//     setBackground(random_color)
//   }
 
//   return (
//     <div className="changer" style={{backgroundColor:background}}>
//       <button onClick={change}>change</button>
//     </div>  
//   )
// }
// export default App




// this is for onChange with select Background color change
import React, { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const bgchange = (event) => {
    setBackgroundColor(event.target.value);
  };

  return (
    <div class = "custom-btn btn-5">
    {/* // <div class = "custom-btn btn-9">
    // <div class = "custom-btn btn-16"> */}
    <div className='changer' style={{ backgroundColor }} onChange={bgchange}>
      <input type="color" value={backgroundColor} onChange={bgchange} />
      <p><i>BG Changer</i></p>
      {/* <button class="custom-btn btn-5"><span>Read More</span></button> */}
    </div>
    </div>
  );
}

export default App;