import { Fragment, useState } from "react"

function TestList() {
    let a = [53, 534]
    return (
        <>
            {
                a.forEach((e) => {
                    console.log(e)
                })
            }
        </>
    )



}

export default TestList