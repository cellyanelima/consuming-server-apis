import Headers from './Header.tsx'
import Footer from './Footer.tsx'
import { getMovies } from '../apiClient.ts'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

function App() {
  const [title, setTitle] = useState('')
  const [searchTitle, setSearchTitle] = useState('')

  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['movies', searchTitle],
    queryFn: () => getMovies(searchTitle),
    enabled: !!searchTitle,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearchTitle(title)
  }

  return (
    <>
      <Headers />
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Movie Title:</label>
        <input id="title" type="text" value={title} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {isError && <p>There was an error</p>}
      {movie && (
        <div>
          <h1>{movie.Title}</h1>
          <p>
            <strong>Year:</strong> {movie.Year}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <img src={movie.Poster} alt={`${movie.Title} Poster`} />
        </div>
      )}
      <br />
      <br />
      <Footer />
    </>
  )
}

export default App
