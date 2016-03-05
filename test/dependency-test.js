import getUserName from '../src/dependency'

describe('mocking out a dependency', () => {

  it('should call getUser and return name', async () => {
    const user = {
      id: 1,
      name: 'John Smith',
    }
    const stub = sinon.stub().returns(user)
    getUserName.__Rewire__('getUser', stub)

    const resp = await getUserName(user.id)

    expect(resp).to.equal(user.name)
    expect(stub).to.be.calledWith(user.id)
  })

})
