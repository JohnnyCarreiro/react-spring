import { useState } from 'react'
import { animated, useTransition } from 'react-spring'

import styles from '../styles/Home.module.scss'

type Item = {
  x?: number
  y?: number
  delay?: number
}
type itemsProps =  Array<Item>

export default function Second() {
  const [items, setItems] = useState([] as itemsProps)
  const transition = useTransition(items, {
    from: { x: -100, y: 800, opacity: 0, width:10, height:10 },
    enter: item => async (next) => (
      await next({ y:item.y, opacity: 1, delay: item.delay }),
      await next({ x: 0, width:100, height:100 })
      ),
    leave: { x: 100, y: 800, opacity: 0 },
  })
  console.log(items)

  return (
    <div className={styles.app}>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          setItems((visible) => visible.length ? [] : [
            { y: -100 , delay:200 },
            { y : -50 , delay:400 },
            { y: 0  , delay:600,},
          ])
        }}
      >
        {items.length ? 'Un-mont' : 'Mount'}
      </button>
      <div className={styles.container}>
        {transition((style, item)=>
          item ? <animated.div style={style} className={styles.item} /> : ''
        )}
      </div>
    </div>
  )
}
