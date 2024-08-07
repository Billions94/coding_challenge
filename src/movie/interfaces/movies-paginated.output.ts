import { Movie } from '../../orm/entities/movie.entity'

export interface MoviesPaginatedOutput {
  results: Movie[]
  resultCount: number
}
