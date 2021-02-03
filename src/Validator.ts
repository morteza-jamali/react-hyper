class Validator {
  properties(param: any): param is PropertiesType {
    return typeof param === 'object' && param.length;
  }

  children(param: any): param is ChildrenType {
    return typeof param === 'string' || Array.isArray(param);
  }
}

const is = (() => new Validator())();

export default is;
