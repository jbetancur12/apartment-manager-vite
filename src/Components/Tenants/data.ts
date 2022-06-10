import { faker } from "@faker-js/faker";

// generate data
faker.seed(0);
export const data = [...new Array(100)].map(() => ({
  id: faker.datatype.uuid(),
  doc: faker.datatype.number({
    min: 1087000000,
    max: 1089000000,
  }),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber("###-###-##-##"),
  address: faker.address.streetAddress(),
}));
