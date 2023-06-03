import { useEffect } from "react"

export const useOutsideClick = (ref, callback) => {

    useEffect(() => {
        const handleOutsideClick = (event) => {
            event.stopPropagation()
            if(ref.current) {
                callback()
            }
        }

        document.addEventListener("click", handleOutsideClick)
        return () => document.removeEventListener("click", handleOutsideClick)
    }, [ref, callback])
}