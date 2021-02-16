import helpers from '@react-hyper/react-hyper/helpers';

const { aside, p, ul, li, a } = helpers;

const itemsChildArray = (items: any[]) => {
  const result: any[] = [];

  items.forEach(({ label, items }) => {
    result.push(
      p({ className: 'menu-label' }, label),
      ul(
        { className: 'menu-list' },
        items.map((i: string) => li(a(i)))
      )
    );
  });

  return result;
};

const SideBar = (items: any[]) =>
  aside({ className: 'menu' }, itemsChildArray(items));

export default SideBar;
