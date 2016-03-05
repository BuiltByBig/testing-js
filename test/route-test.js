import route from '../src/route'

describe('testing an Express route', () => {

  it('should return valid JSON', () => {
    const req = mockReq({
      body: {
        name: 'world',
      }
    })
    const res = mockRes()

    route(req, res)

    expect(res.json).to.be.calledWith({
      message: 'hello world',
    })
  })

})
