import { useCallback, useEffect, useState } from "react"

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    let localValue = localStorage.getItem(key)
    if (localValue == null) {
      return initialValue
    } else {
      return localValue
    }
  })
  useEffect(() => {
    localStorage.setItem(key, value)
  }, [value])
  return [value, setValue]
}
