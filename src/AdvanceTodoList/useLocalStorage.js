import { useState } from "react"

function doesExist(key) {
  return JSON.parse(localStorage.getItem(key))
}
export function useLocalStorage(key, initialValue) {
  console.log("local storage is being passed")
  const [arr, setArr] = useState(doesExist(key) || initialValue)

  localStorage.setItem(key, JSON.stringify(arr))
  function setLocalArray(newArr) {
    setArr(newArr)
  }
  return [arr, setLocalArray]
}
