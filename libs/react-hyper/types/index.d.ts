namespace R {
  type ComponentType = any;
  type PropertiesType = any;
  type ChildrenType = any;
  type SelectorType = any;
  type ReturnType = any;
  type RenderFunctionType = (
    component: ComponentType,
    properties: PropertiesType,
    children: ChildrenType
  ) => ReturnType;
  type FunctionType = (
    component: ComponentType,
    properties?: PropertiesType,
    children?: ComponentType
  ) => ReturnType;
  type R0FunctionType = (component: ComponentType) => ReturnType;
  type R1FunctionType = (
    component: ComponentType,
    properties: PropertiesType
  ) => ReturnType;
  type R2FunctionType = (
    component: ComponentType,
    children: ChildrenType
  ) => ReturnType;
  type FixChildrenFunctionType = (children: ChildrenType) => ChildrenType;
}

export default R;
