import React from 'react';
import is from './Validator';
import { Parser } from './Parser';

// Function overloading in Typescript doesn't exist but i do it in another way
const r0 = (component: ComponentType) => {
  render(component, {}, []);
};

const r1 = (component: ComponentType, properties: PropertiesType) => {
  render(component, properties, []);
};

const r2 = (component: ComponentType, children: ChildrenType) => {
  render(component, {}, children);
};

const render = (
  component: ComponentType,
  properties: PropertiesType,
  children: ChildrenType
) => {
  if (properties.dataset) {
    Object.keys(properties.dataset).forEach(attrName => {
      let dashedAttr = attrName.replace(
        /([a-z])([A-Z])/,
        match => `${match[0]}-${match[1].toLowerCase()}`
      );
      properties[`data-${dashedAttr}`] = properties.dataset[attrName];
    });

    properties.dataset = undefined;
  }

  if (properties.attributes) {
    Object.keys(properties.attributes).forEach(attrName => {
      properties[attrName] = properties.attributes[attrName];
    });

    properties.attributes = undefined;
  }

  component = Parser(component, properties);

  const args: any = [component, properties].concat(children);

  return React.createElement.apply(React, args);
};

export const r = (
  component: ComponentType,
  properties?: PropertiesType,
  children?: ChildrenType
) => {
  if (!is.properties(properties) && !is.children(children)) {
    return r0(component);
  } else if (is.properties(properties) && !is.children(children)) {
    return r1(component, properties);
  } else if (!is.properties(properties) && is.children(children)) {
    return r2(component, children);
  } else if (is.properties(properties) && is.children(children)) {
    return render(component, properties, children);
  }
};
