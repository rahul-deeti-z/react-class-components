import React from 'react'
import './myStyles.css'
function StyleSheetDemo(props) {
   let className = props.primary? 'primary' : '' 
  return (
    <div>
      <h1 className="primary">StyleSheetDemo</h1>
      <h1 className={className}>StyleSheetDemo</h1>
      {/* using template literals */}
      <h1 className={`${className} font-xl`}>StyleSheetDemo</h1>
    </div>
  );
}

export default StyleSheetDemo

// Styling react componnets
// 1. CSS StyleSheetList
// 2. Inline Styling
// 3. CSS modules
// 4. CSS in JS libraries (not covered in videos)