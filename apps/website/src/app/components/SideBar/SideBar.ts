import helpers from '@moraj/react-hyper/helper';

const { aside, p, ul, li, a } = helpers;

const itemsChildArray = (items: any[]) => {
  const result: any[] = [];

  items.forEach(({ label, items }) => {
    result.push(
      p(label).class('menu-label'),
      ul(items.map((i: string) => li(a(i)))).class('menu-list')
    );
  });

  return result;
};

const SideBar = (items: any[]) => aside(itemsChildArray(items)).class('menu');

export default SideBar;
