import librariesList from '../librariesList'

describe('librariesList', () => {
  it('should include react', () => {
    const react = { name: 'react', score: 2, type: 'frameworks', version: '*' }

    expect(librariesList).toContainEqual(react)
  })
})
