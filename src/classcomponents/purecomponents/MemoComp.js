import React from 'react'

function MemoComp({name}) {
    console.log("Rendering Memo Component")
  return (
    <div>MemoComp {name}</div>
  )
}

export default React.memo(MemoComp)

//Using memo will cause React to skip rendering a component if its props have not changed.