import { useState, useEffect, useCallback, useMemo } from "react"

// If the API does not work use these local URLs
// const URLS = {
//   USERS: "users.json",
//   POSTS: "posts.json",
//   COMMENTS: "comments.json",
// }

const URLS = {
    USERS: "https://jsonplaceholder.typicode.com/users",
    POSTS: "https://jsonplaceholder.typicode.com/posts",
    COMMENTS: "https://jsonplaceholder.typicode.com/comments",
}

// BONUS:
// const OPTIONS = {
//   method: "POST",
//   body: JSON.stringify({ name: "Kyle" }),
//   headers: {
//     "Content-type": "application/json",
//   },
// }

function FetchData() {
    let { url, setUrl, onChange } = useCheckbox("USERS")


    const { data, isLoading, isError } = useFetch(url)

    // BONUS:
    // const { data, isLoading, isError } = useFetch(url, OPTIONS)

    return (
        <>
            <div>
                <label>
                    <input
                        type="radio"
                        checked={url === URLS.USERS}
                        onChange={onChange}
                    />
                    Users
                </label>
                <label>
                    <input
                        type="radio"
                        checked={url === URLS.POSTS}
                        onChange={() => setUrl(URLS.POSTS)}
                    />
                    Posts
                </label>
                <label>
                    <input
                        type="radio"
                        checked={url === URLS.COMMENTS}
                        onChange={() => setUrl(URLS.COMMENTS)}
                    />
                    Comments
                </label>
            </div>


            {isLoading ? (
                <h1>Loading...</h1>
            ) : isError ? (
                <h1>{Error}</h1>
            ) : (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
        </>
    )

    function useFetch(url) {
        const [data, setData] = useState()
        const [isLoading, setLoading] = useState()
        const [isError, setError] = useState(false)

        useEffect(() => {
            setLoading(true)
            const controller = new AbortController();
            const signal = controller.signal;
            fetch(url, { signal })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setData(data)
                })
                .catch((err) => {
                    setError(err)
                })
                .finally(() => {
                    setLoading(false)
                })
            return (() => {
                controller.abort();
                console.log("aborted fetch")
            })

        }, [url])

        return { data, isLoading, isError }
    }
}


function useCheckbox(url) {

    const [url, setUrl] = useState(URLS.url)

    let checked = url === URLS.COMMENTS
    function onChange() {
        setUrl(URLS.COMMENTS)
    }
    return { url, checked, onChange }
}
export default FetchData
