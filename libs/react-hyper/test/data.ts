import tags from '../data/tags.json';
import faker from 'faker';

const testingAttributes = {
  className: 'firstClass secondClass thirdClass',
  id: 'testID',
};

const testingValues = [
  faker.lorem.text(),
  [faker.lorem.paragraph(), faker.lorem.paragraph(), faker.lorem.paragraph()],
];

export { tags, testingAttributes, testingValues };
