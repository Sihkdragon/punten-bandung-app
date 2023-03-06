const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker/locale/id_ID')

const prisma = new PrismaClient()

async function createGallery() {
  for (let i = 1; i <= 10; i++) {
    await prisma.gallery.upsert({
      where: { id: i },
      update: {},
      create: {
        author: faker.name.fullName(),
        image_url: faker.image.imageUrl(360, 640, 'place', true),
        location: faker.address.county() + ', ' + faker.address.city()
      }
    })
  }
}

module.exports = createGallery
