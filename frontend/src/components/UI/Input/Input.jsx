import clsx from 'clsx'
import { useState } from 'react'

import styles from './Input.module.css'

export const Input = ({ label, className, value, ...rest }) => {
  const [focused, setFocused] = useState(false)

  return (
    <div className={clsx(styles.wrapper, className)}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...rest}
      />
      <span
        className={clsx(
          styles.label,
          value && !focused && styles.hidden,
          (value || focused) && styles.inTop,
        )}
      >
        {label}
      </span>
    </div>
  )
}
