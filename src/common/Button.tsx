import React from "react"

function Button(props : {name: string, alias: string, age: number, hobbies: string[]}) {
  return <><h1>{props.name}</h1>
        <h2>{props.alias}</h2>
        <h3>{props.age}</h3>
        <h4>{props.hobbies.join(", ")}</h4>
        </>
}

export const But = () => {
    return <button>Exported Button</button>
}

export const ButtonWithouttsx = () => {
  return React.createElement('div', 
    null,
    React.createElement('button', 
      { id: 'btn', className: 'btn-class' }, 
      'Button without TSX'
    )
  )
}

export default Button