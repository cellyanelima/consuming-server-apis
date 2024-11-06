import express from 'express'
//import { Movies } from '../../models/movies.ts'
import 'dotenv/config'
import request from 'superagent'

const router = express.Router()
const apiKey = process.env.OMDB_API_KEY

// GET /api/v1/movies/
router.get('/', async (req, res) => {
  const { title } = req.query
  console.log(req.query)
  try {
    if (apiKey == undefined) {
      throw new Error('Missing apiKey environment variable')
    }

    if (!title) {
      return res.status(400).send('Title query parameter is required')
    }

    const apiResponse = await request.get(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`,
    )
    console.log(apiResponse.body)
    res.json(apiResponse.body)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('Something went wrong')
    }
  }
})

export default router
