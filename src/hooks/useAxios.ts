/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react"
import axios from "../axios"

type ConfigType = {
    axiosInstance?: any
    url?: string
    method?: string
    request?: {
        headers?: any
        params?: any
        data?: any
    }
}

const useAxios = () => {

    const [response, setResponse] = useState<any>(null)
    const [success, setSuccess] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean | null>(null)
    const [controller, setController] = useState<any>()

    const axiosFetch = async (configObj: ConfigType) => {
        const {
            axiosInstance = axios,
            method = 'get',
            url,
            request = {}
        } = configObj

        try {
            setSuccess(false)
            setLoading(true)
            const ctrl = new AbortController()
            setController(ctrl)
            const res = await axiosInstance[method.toLowerCase()](url, {
                ...request,
                signal: ctrl.signal
            })
            if (res.status >= 200 && res.status < 300) {
                if (res.data.success) {
                    setResponse(res.data.data)
                    setSuccess(true)
                } else {
                    setError(res.data.error)
                }
            } else {
                setError("Something went wrong")
            }

        } catch (error: any) {
            setSuccess(false)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        return () => controller && controller.abort()
    }, [controller])

    return [response, loading, error, axiosFetch]
}

export default useAxios