import R from '../../types/index';

class Validator {
  properties(param: any): param is R.PropertiesType {
    return (
      !Array.isArray(param) &&
      typeof param === 'object' &&
      Object.keys(param).length > 0 &&
      !param.hasOwnProperty('$$typeof')
    );
  }

  children(param: any): param is R.ChildrenType {
    return (
      typeof param === 'string' ||
      Array.isArray(param) ||
      typeof param === 'object'
    );
  }

  validString(param: any): boolean {
    return typeof param === 'string' && param.length > 0;
  }

  startedWith(str: string, start: any): boolean {
    return str[0] === start;
  }

  selector(param: any): param is R.SelectorType {
    return (
      this.validString(param) &&
      (this.startedWith(param, '.') || this.startedWith(param, '#'))
    );
  }
}

const is = (() => new Validator())();

export default is;
