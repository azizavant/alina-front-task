import { useEffect, useMemo, useRef } from 'react'
import debounce from 'lodash.debounce'

export const useDebounce = (callback, ms) => {
    const ref = useRef(() => {})

    useEffect(() => {
        ref.current = callback
    }, [callback])

    return useMemo(() => {
        const func = () => {
            ref.current()
        }

        return debounce(func, ms)
    }, [])
}
