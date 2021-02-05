import tags from '../src/data/tags.json';
import { r } from '../src/index';
import { getTagName } from './functions';

let testInput: string[] = [];
let testExpected: string[] = [];

tags.defaults.forEach((tag) => {
  testInput.push(getTagName(r(tag)));
  testExpected.push(tag);
});

describe('Testing r() function', () => {
  test('Testing component parameter', () => {
    expect(testInput).toEqual(testExpected);
  });
});
