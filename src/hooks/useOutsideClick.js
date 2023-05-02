import { useEffect } from "react"

export const useOutsideClick = (ref, callback) => {

    useEffect(() => {
        const handleOutsideClick = (event) => {
            event.stopPropagation()
            if(ref.current) {
                callback()
                console.log(event.target)
                console.log(ref.current)
            }
        }

        document.addEventListener("click", handleOutsideClick)
        return () => document.removeEventListener("click", handleOutsideClick)
    }, [ref, callback])
}