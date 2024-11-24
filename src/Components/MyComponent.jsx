import React from 'react'

export default function MyComponent() {
  const element = React.createElement(
    'h1',
     {className: 'con'},
    'hello,Qzfrato'
   );

  return (
    <div>MyComponent
      {element}
    </div>
  )
}

