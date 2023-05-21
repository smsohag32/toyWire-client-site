import { useEffect } from "react"


const useTitle = (title) => {
    useEffect(()=> {
        document.title = `ToyWire | ${title}`
    }, [title])
}

export default useTitle;