import { useState } from "react"
import "./styles.css"
import { checkEmail, checkPass } from "./validators"

function StateForm() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [emailErrors, setEmailErrors] = useState([])
    const [passErrors, setPassErrors] = useState([])

    function onSubmit(e) {
        e.preventDefault()
        const emailResults = checkEmail(email)
        const passResults = checkPass(pass)
        setEmailErrors(emailResults)
        setPassErrors(passResults)
            (emailResults.length == 0 && passErrors.length == 0){
            alert("success")
        }
    }


    return (
        <>

            <form onSubmit={onSubmit} className="form">
                <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}  >
                    <label className="label" htmlFor="email">Email</label>
                    <input className="input" type="email" id="email" value={email} onChange={e => {
                        setEmail(e.target.value)
                    }} />
                    {emailErrors.length > 0 &&
                        (<div className="msg">{emailErrors.join(" ,")}</div>)
                    }
                </div>
                <div className={`form-group ${passErrors.length > 0 ? "error" : ""}`} >
                    <label className="label" htmlFor="password">Password</label>
                    <input
                        className="input"
                        value={pass} onChange={e => {
                            setPass(e.target.value)
                        }}
                        type="password"
                        id="password"
                    />
                </div>
                {`form-group ${passErrors.length > 0 ? "error" : ""}`}
                <button className="btn" type="submit">Submit</button>
            </form>

        </>
    )
}

export default StateForm