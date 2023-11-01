/* eslint-disable @typescript-eslint/no-explicit-any */

// Import necessary modules and dependencies.

import { useState, useEffect } from "react"
import axios from "../axios"

// Define a type for the configuration object used in the useAxios hook.
type ConfigType = {
    axiosInstance?: any  // Optional Axios instance for making requests.
    url?: string  // The URL for the HTTP request
    method?: string  // The HTTP request method (e.g., 'get', 'post').
    request?: {
        headers?: any // Request headers.
        params?: any // Request parameters.
        data?: any // Request data.
    }
}

// Define the useAxios custom hook.

const useAxios = () => {
// Define state variables to manage the HTTP request.
    const [response, setResponse] = useState<any>(null)    // Response data.
    const [success, setSuccess] = useState<boolean>(false)  // Success flag.
    const [error, setError] = useState<string | null>(null)  // Error message.
    const [loading, setLoading] = useState<boolean | null>(null)  // Loading flag.
    const [controller, setController] = useState<any>()  // Abort controller for request cancellation.

    // Define the axiosFetch function to make HTTP requests.

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

     // Use useEffect to clean up the abort controller when the component unmounts.

    useEffect(() => {
        return () => controller && controller.abort()
    }, [controller])

    // Return an array with response data, loading state, error message, and the axiosFetch function.
    return [response, loading, error, axiosFetch]
}

// Export the useAxios custom hook for use in other parts of the application.

export default useAxios