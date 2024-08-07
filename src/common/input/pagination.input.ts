import { Type } from 'class-transformer'
import { IsOptional, Max, Min } from 'class-validator'

export class PaginationInput {
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  page?: number

  @Min(0)
  @Max(250)
  @IsOptional()
  @Type(() => Number)
  limit?: number
}
