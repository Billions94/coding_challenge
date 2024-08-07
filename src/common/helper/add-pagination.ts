import { SelectQueryBuilder } from 'typeorm'
import { PaginationInput } from '../input/pagination.input'

export function addPagination<Entity>(
  queryBuilder: SelectQueryBuilder<Entity>,
  pagination: PaginationInput
): SelectQueryBuilder<Entity> {
  const page = pagination.page || 1
  const limit = pagination.limit || 10
  queryBuilder.take(limit)
  queryBuilder.skip((page - 1) * limit)
  return queryBuilder
}
