import getUser from './lib'

export default async (id) => {
  const user = await getUser(id)
  return user.name
}
