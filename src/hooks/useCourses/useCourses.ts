import {useEffect, useState} from 'react'
import axios, {AxiosError} from 'axios'
import {CourseData} from './model'

export const useCourses = () => {
    const [courses, setCourses] = useState<CourseData>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function fetchCourses() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<CourseData>('/api/config')
            setCourses(response.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchCourses()
    }, [])

    return { courses, error, loading }
}
