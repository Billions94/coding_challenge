import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { PaginationInput } from 'src/common/input/pagination.input'
import { Repository } from 'typeorm'
import { addPagination } from '../common/helper/add-pagination'
import { Movie } from '../orm/entities/movie.entity'

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>
  ) {}

  public async findManyAndCount(pagination: PaginationInput, searchTerm: string): Promise<[Movie[], number]> {
    const queryBuilder = this.movieRepository.createQueryBuilder('movie')
    addPagination(queryBuilder, pagination)

    if (searchTerm) {
      queryBuilder.where('movie.title LIKE :searchTerm', { searchTerm: `%${searchTerm}%` })
    }

    return queryBuilder.getManyAndCount()
  }
}
