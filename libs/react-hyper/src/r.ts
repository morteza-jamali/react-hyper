import React from 'react';
import R from '../types/index';
import is from './lib/Validator';
import { Map } from 'immutable';
import { Parser } from './lib/Parser';

const customComponentFunctions = {
  repeat(prop: number) {
    return r(
      Array(prop)
        .fill(0)
        .map(() => this)
    );
  },
  class(prop: string | string[]) {
    const unfreezedObjectProps = { ...this.props };
    prop = typeof prop === 'string' ? [prop] : prop;

    unfreezedObjectProps.className = unfreezedObjectProps.className
      ? [...unfreezedObjectProps.className.split(' '), ...prop].join(' ')
      : prop.join(' ');

    return r([
      Object.freeze(
        Object.assign(
          { ...this },
          { props: Object.freeze(unfreezedObjectProps) }
        )
      ),
    ]);
  },
  loop(props: any[]) {
    const _this = Map(this);
    const unfreezedObjectProps = Map(this.props);
    const nestedProps = Map(
      (unfreezedObjectProps.toObject() as any).children.props
    );

    return r(
      props.map((prop) => {
        const nestedPropsObject = Object.freeze({
          props: nestedProps.merge(Map(prop)).toObject(),
        });
        const nestedChildren = Map(unfreezedObjectProps.get('children') as any);

        const nestedChildrenObject = Object.freeze({
          children: nestedChildren.merge(nestedPropsObject).toObject(),
        });

        return r([
          Object.freeze(
            _this
              .merge(
                Map({
                  props: nestedChildrenObject,
                })
              )
              .toObject()
          ),
        ]);
      })
    );
  },
};

// Function overloading in Typescript doesn't exist but i do it in another way
const r0: R.R0FunctionType = (component) => render(component, {}, []);

const r1: R.R1FunctionType = (component, properties) =>
  render(component, properties, []);

const r2: R.R2FunctionType = (component, children) =>
  render(component, {}, children);

const render: R.RenderFunctionType = (component, properties, children) => {
  if (properties.dataset) {
    Object.keys(properties.dataset).forEach((attrName) => {
      let dashedAttr = attrName.replace(
        /([a-z])([A-Z])/,
        (match) => `${match[0]}-${match[1].toLowerCase()}`
      );
      properties[`data-${dashedAttr}`] = properties.dataset[attrName];
    });

    properties.dataset = undefined;
  }

  if (properties.attributes) {
    Object.keys(properties.attributes).forEach((attrName) => {
      properties[attrName] = properties.attributes[attrName];
    });

    properties.attributes = undefined;
  }

  if (typeof component === 'string') {
    component = Parser(component, properties);
  }

  const args: any = [component, properties].concat(children);

  return Object.freeze({
    ...React.createElement.apply(React, args),
    ...customComponentFunctions,
  });
};

const fixChildren: R.FixChildrenFunctionType = (children) =>
  Array.isArray(children) ? children : [children];

const r: R.FunctionType = (component, properties, children) => {
  if (
    Array.isArray(component) &&
    !is.properties(properties) &&
    !is.children(children)
  ) {
    return r2(React.Fragment, component);
  } else if (!is.properties(properties) && !is.children(children)) {
    if (is.children(properties)) {
      return r2(component, fixChildren(properties));
    }

    return r0(component);
  } else if (is.properties(properties) && !is.children(children)) {
    return r1(component, properties);
  } else if (!is.properties(properties) && is.children(children)) {
    return r2(component, fixChildren(children));
  } else if (is.properties(properties) && is.children(children)) {
    return render(component, properties, fixChildren(children));
  }

  return React.Fragment;
};

export default r;
