import { useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage"

let k = 78;
function LocalStorage() {
    const a = [34, 23]
    const [firstName, setFirstName] = useLocalStorage("FIRST_NAME", "kkj")


    const [lastName, setLastName] = useLocalStorage("LAST_NAME", () => {
        return "Default"
    })

    // Bonus:
    const [hobbies, setHobbies] = useLocalStorage("HOBBIES", [
        "Programming",
        "Weight Lifting",
    ])

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                }}
            >
                <label>First Name</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </div>


            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                }}
            >
                <label>Last Name</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </div>

            {/* Bonus: */}
            {/* <div>{hobbies.join(", ")}</div> //original */}
            <div>{hobbies}</div>
            <button
                onClick={() =>
                    setHobbies(currentHobbies => [...currentHobbies, "New Hobby"])
                }
            >
                Add Hobby
            </button>
        </>
    )
}

export default LocalStorage
