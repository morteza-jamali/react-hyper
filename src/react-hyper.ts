import React from 'react';
import Parser from './Parser';

const r = (componentOrTag: string, properties: any, children: any) => {
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

  componentOrTag = Parser(componentOrTag, properties);

  let args: any = [componentOrTag, properties].concat(children);
  return React.createElement.apply(React, args);
};

export default r;
