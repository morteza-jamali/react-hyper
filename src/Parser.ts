const CLASS_ID_SPLIT = /([\.#]?[a-zA-Z0-9_:-]+)/;
const NO_CLASS_ID = /^\.|#/;

export const Parser = (tag: any, props: any) => {
  if (!tag) {
    return 'div';
  }

  let noId = !('id' in props);

  let tagParts = tag.split(CLASS_ID_SPLIT);
  let tagName = null;

  if (NO_CLASS_ID.test(tagParts[1])) {
    tagName = 'div';
  }

  let classes: any;
  let part;
  let type;
  let i;
  for (i = 0; i < tagParts.length; i++) {
    part = tagParts[i];

    if (!part) {
      continue;
    }

    type = part.charAt(0);

    if (!tagName) {
      tagName = part;
    } else if (type === '.') {
      classes = classes || [];
      classes.push(part.substring(1, part.length));
    } else if (type === '#' && noId) {
      props.id = part.substring(1, part.length);
    }
  }

  if (classes) {
    if (props.className) {
      classes.push(props.className);
    }

    props.className = classes.join(' ');
  }

  return tagName ? tagName.toLowerCase() : 'div';
};
