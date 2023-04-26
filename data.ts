import { faker } from '@faker-js/faker';

type DataItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
};

const data: DataItem[] = [];

for (let i = 0; i < 50; i++) {
  data.push({
    id: faker.datatype.uuid(),
    title: faker.lorem.words(),
    subtitle: faker.lorem.sentences(),
    image: faker.image.nature(200, 200, true),
  });
}

export default data;
