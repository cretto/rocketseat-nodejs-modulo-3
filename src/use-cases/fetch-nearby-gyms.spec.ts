import { expect, describe, it, beforeEach } from 'vitest'

import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch nearby gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Near gyms',
      description: null,
      phone: null,
      latitude: -22.998403,
      longitude: -47.5151731,
    })

    await gymsRepository.create({
      title: 'Far gyms',
      description: null,
      phone: null,
      latitude: -23.0485068,
      longitude: -48.548693,
    })

    const { gyms } = await sut.execute({
      userLatitude: -22.998403,
      userLongitude: -47.5151731,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near gyms' })])
  })
})
