import { Controller, Get, Query } from '@nestjs/common'
import { MoviesFindInput } from './interfaces/movies-find.input'
import { MoviesPaginatedOutput } from './interfaces/movies-paginated.output'
import { MovieService } from './movie.service'

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  public async getMovies(
    @Query() queryParams: MoviesFindInput,
    @Query('searchTerm') searchTerm: string
  ): Promise<MoviesPaginatedOutput> {
    const [results, resultCount] = await this.movieService.findManyAndCount(queryParams, searchTerm)
    return {
      results,
      resultCount
    }
  }
}
