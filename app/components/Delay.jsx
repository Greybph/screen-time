import {useEffect, useState} from 'react'

function Delay({children, delay}) {
  let [hidden, setHidden] = useState(true)

  useEffect(() => {
    setTimeout(() => setHidden(false), delay)
  })

    return hidden ? '' : children
}

export default Delay