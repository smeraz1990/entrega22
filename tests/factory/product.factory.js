import { faker } from '@faker-js/faker'
faker.locale = "es";

function generateProduct() {
  return {
    name: faker.commerce.product(),
    price: faker.commerce.price(100, 200, 0),
    thumbnail: faker.image.imageUrl()
  };
}

export default {
  generateProduct,
};
