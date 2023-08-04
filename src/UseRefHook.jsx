import { useEffect, useRef, useState } from "react"
export default function UseRefHook() {
    const [query, setQuery] = useState()
    function setValue() {
        console.log("value will be returned after delay");

    }


    const inputRef = useRef()

    useEffect(() => {
        console.log(inputRef.current);

    }, [])


    return (<>
        <input ref={inputRef} type="text" value="i am input" onChange={ } />
    </>)
}