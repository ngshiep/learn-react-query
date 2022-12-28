import { StudentsType } from 'types/student.type'
import http from '../utitls/http'

export const getStudents = (page: number | string, limit: number | string) =>
  http.get<StudentsType>('students', {
    params: {
      _page: page,
      _limit: limit
    }
  })
