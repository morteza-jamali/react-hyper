import tags from './data/tags.json';
import is from './Validator';

const DEFAULT_TAG_NAMES: any = tags.defaults;
//const SVG_TAG_NAMES: any = tags.svg;

const node = (r: any) => (tagName: any) => (first: any, ...rest: any) => {
  if (is.selector(first)) {
    return r(tagName + first, ...rest);
  } else {
    return r(tagName, first, ...rest);
  }
};

const helper = (r: any) => {
  const createTag = node(r);
  const isSelector = is.selector;
  const exported: any = { DEFAULT_TAG_NAMES, isSelector, createTag };
  DEFAULT_TAG_NAMES.forEach((n: any) => {
    exported[n] = exported[n.charAt(0).toUpperCase() + n.slice(1)] = createTag(
      n
    );
  });

  return exported;
};

export default helper;

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
