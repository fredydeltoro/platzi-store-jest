import getData from '../../utils/getData'

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  test('Llamar API y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '123456' }))

    getData('https://google.com').then((response) => {
      expect(response.data).toEqual('1234')
    })
  })
})