import tags from './data/tags.json';

const isValidString = (param: any) =>
  typeof param === 'string' && param.length > 0;

const startsWith = (string: string, start: any) => string[0] === start;

const isSelector = (param: any) =>
  isValidString(param) && (startsWith(param, '.') || startsWith(param, '#'));

const node = (h: any) => (tagName: any) => (first: any, ...rest: any) => {
  if (isSelector(first)) {
    return h(tagName + first, ...rest);
  } else if (typeof first === 'undefined') {
    return h(tagName);
  } else {
    return h(tagName, first, ...rest);
  }
};

const TAG_NAMES: any = tags.defaults;

export const helper = (h: any) => {
  const createTag = node(h);
  const exported: any = { TAG_NAMES, isSelector, createTag };
  TAG_NAMES.forEach((n: any) => {
    exported[n] = exported[n.charAt(0).toUpperCase() + n.slice(1)] = createTag(
      n
    );
  });
  return exported;
};

///////////////////////// SVG helper

/*import hh from './index';

// https://www.w3.org/TR/SVG/eltindex.html
// The tag names are verified against svg-tag-names in the tests
// See https://github.com/ohanhi/hyperscript-helpers/issues/34 for the reason
// why the tags aren't simply required from svg-tag-names
const TAG_NAMES = ;

export default h => {
  const createTag = hh(h).createTag;
  const exported = { TAG_NAMES, createTag };
  TAG_NAMES.forEach(n => {
    exported[n] = createTag(n);
  });
  return exported;
};*/
