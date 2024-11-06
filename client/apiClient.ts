import request from 'superagent'
import { Movies } from '../models/movies.ts'

// *** EXAMPLE ***
export async function getMovies(title: string): Promise<Movies> {
  const response = await request.get(`/api/v1/movies?title=${title}`)
  return response.body
}
// ***   ***   ***
