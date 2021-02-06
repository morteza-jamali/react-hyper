import { tags, testingAttributes, testingValues } from './data';
import { r } from '../src/index';
import { getTagName, getAttributes } from './functions';

let componentTestInput: string[] = [];
let valuesTestInput: string[] = [];

tags.defaults.forEach((tag) => {
  componentTestInput.push(getTagName(r(tag)));
});

testingValues.forEach((value) => {
  valuesTestInput.push(getAttributes(r('', value)).children);
});

describe('Testing r() function', () => {
  test('Testing component parameter', () => {
    expect(componentTestInput).toEqual(tags.defaults);
  });

  test('Testing properties parameter', () => {
    expect(getAttributes(r('', testingAttributes))).toEqual(testingAttributes);
  });

  test('Testing children parameter', () => {
    expect(valuesTestInput).toEqual(testingValues);
  });
});
