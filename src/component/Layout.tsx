import Menu from './Menu/Menu';

function Layout({ children }: any) {
  return (
    <main>
      <Menu />
      {children}
    </main>
  );
}

export default Layout;
