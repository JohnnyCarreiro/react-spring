import { useState } from 'react'
import { animated, useTransition } from 'react-spring'

import styles from '../styles/Home.module.scss'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const transition = useTransition(isVisible, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 800, opacity: 0 },
  })

  return (
    <div className={styles.app}>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          setIsVisible((visible) => !visible)
        }}
      >
        {isVisible ? 'Un-mont' : 'Mount'}
      </button>
      <div className={styles.container}>
        {transition((style, item)=>
          item ? <animated.div style={style} className={styles.item} /> : ''
        )}
      </div>
    </div>
  )
}
