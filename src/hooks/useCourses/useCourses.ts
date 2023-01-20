import {useEffect, useState} from 'react'
import axios, {AxiosError} from 'axios'
import {CourseData} from './useCourses.model'

export const useCourses = () => {
    const [courses, setCourses] = useState<CourseData>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchCourses = async () => {
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
        fetchCourses()
    }, [])

    return { courses, error, loading }
}
