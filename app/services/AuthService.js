const { PrismaClient, Prisma } = require('@prisma/client')
const { VerifyPassword, HashPassword } = require('../helpers/Hash/hashHelpers')
const { Init_JWT } = require('../helpers/JWT/jwtHelpers')
const UserRepository = require('../repositories/UserRepository')
const { BASE_API_RESPONSE } = require('../resources/APIResponse')

const prisma = new PrismaClient()

class AuthService {
  constructor() {
    this.User = new UserRepository()
  }

  async login(username, password) {
    const User = await this.User.get({ username })

    if (!User) {
      return null
    }

    if (await VerifyPassword(User.password, password)) {
      delete User.password
      return {
        ...User,
        AccessToken: Init_JWT({
          name: User.name,
          username: User.username,
          role: User.role,
          email: User.email
        }),
        TokenType: 'Bearer'
      }
    } else {
      return null
    }
  }

  async register(data) {
    data.password = await HashPassword(data.password)
    try {
      const User = await this.User.create(data)
      delete User.password
      return { ...User }
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        return 'P2002'
      }
      throw e
    }
  }
}

module.exports = AuthService
