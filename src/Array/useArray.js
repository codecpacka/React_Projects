import { useCallback, useState } from "react"

export function useArray(initialArr) {
  let a = [4, 3, 5, 2]

  const [currentArr, setArr] = useState(initialArr)
  console.log(currentArr)

  const set = useCallback(() => {
    setArr([4, 5, 6])
  }, [])

  const push = useCallback(
    () =>
      setArr((curr) => {
        return [...curr, 4]
      }),
    []
  )

  const replace = useCallback(() => {
    setArr((curr) => {
      return curr.map((elm, i) => {
        if (i == 1) {
          return 9
        }
        return elm
      })
    })
  }, [])

  const filter = useCallback(() => {
    setArr(currentArr.filter((ele, index) => index < 3))
  }, [])

  const remove = useCallback(() => {
    setArr(
      currentArr.filter((ele, index) => {
        if (index != 1) {
          return true
        }
      })
    )
  }, [])
  const clear = useCallback(() => {
    setArr([])
  }, [])
  const reset = useCallback(() => {
    setArr([5, 6])
  }, [])
  return {
    array: currentArr,
    set,
    push,
    replace,
    filter,
    remove,
    clear,
    reset,
  }
}
