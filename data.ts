import { faker } from '@faker-js/faker';

type DataItem = {
  /** Unique ID */
  id: string;
  /** Title of the item, usually a couple of words long */
  title: string;
  /** Subtitle, description, summary, which is made up of multiple sentences */
  subtitle: string;
  /** The URI of the image */
  imageUri: string;
};

const data: DataItem[] = [];

for (let i = 0; i < 50; i++) {
  data.push({
    id: faker.datatype.uuid(),
    title: faker.lorem.words(),
    subtitle: faker.lorem.sentences(),
    imageUri: faker.image.nature(200, 200, true),
  });
}

export default data;
