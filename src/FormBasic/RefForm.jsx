import { useRef, useState } from "react"
import "./styles.css"
import { checkEmail, checkPass } from "./validators"

function RefForm() {
    const emailRef = useRef()
    const passRef = useRef()
    const [emailErrors, setEmailErrors] = useState([])
    const [passErrors, setPassErrors] = useState([])
    const [isAfterSubmit, setIsAfterSubmit] = useState(false)

    function onSubmit(e) {
        e.preventDefault()
        setIsAfterSubmit(true)
        const emailResults = checkEmail(emailRef.current.value)
        const passResults = checkPass(passRef.current.value)
        setEmailErrors(emailResults)
        setPassErrors(passResults)
        if (emailResults.length === 0 && passResults.length === 0) {
            alert("success")
        }
    }


    return (
        <>

            <form onSubmit={onSubmit} className="form">
                <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}  >
                    <label className="label" htmlFor="email">Email</label>
                    <input ref={emailRef} onChange={isAfterSubmit ? (e => setEmailErrors(checkEmail(e.target.value))) : undefined}

                        className="input" type="email" id="email" defaultValue="test@123" />
                    {emailErrors.length > 0 &&
                        (<div className="msg">{emailErrors.join(" ,")}</div>)
                    }
                </div>
                <div className={`form-group ${passErrors.length > 0 ? "error" : ""}`} >
                    <label className="label" htmlFor="password">Password</label>
                    <input
                        className="input"
                        defaultValue="123"
                        ref={passRef}
                        onChange={isAfterSubmit ? (e => setPassErrors(checkPass(e.target.value))) : undefined}
                        type="password"
                        id="password"
                    />
                </div>
                {passErrors.length > 0 ? passErrors.join(", ") : ""}
                <button className="btn" type="submit">Submit</button>
            </form>

        </>
    )
}

export default RefForm