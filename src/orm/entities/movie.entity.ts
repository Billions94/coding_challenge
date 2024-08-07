import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar', length: 1000, nullable: false })
  title: string

  @Column({ type: 'int', nullable: true, default: null })
  budget: number | null

  @Column({ type: 'varchar', length: 1000, nullable: true, default: null })
  homepage: string | null

  @Column({ type: 'varchar', length: 1000, nullable: true, default: null })
  overview: string | null

  @Column({ type: 'decimal', nullable: true, default: null })
  popularity: number | null

  @Column({ type: 'date', nullable: true, default: null })
  releasedAt: Date

  @Column({ type: 'bigint', nullable: true, default: null })
  revenue: number

  @Column({ type: 'int', nullable: true, default: null })
  runtime: number

  @Column({ type: 'varchar', length: 50, nullable: true, default: null })
  status: string

  @Column({ type: 'varchar', length: 1000, nullable: true, default: null })
  tagline: string

  @Column({ type: 'decimal', nullable: true, default: null })
  voteAverage: number | null

  @Column({ type: 'int', nullable: true, default: null })
  voteCount: number | null
}
