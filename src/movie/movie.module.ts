import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Movie } from '../orm/entities/movie.entity'
import { OrmModule } from '../orm/orm.module'
import { MovieController } from './movie.controller'
import { MovieService } from './movie.service'

@Module({
  imports: [OrmModule, TypeOrmModule.forFeature([Movie])],
  controllers: [MovieController],
  providers: [MovieService]
})
export class MovieModule {}
