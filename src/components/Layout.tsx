import { Link, Outlet } from 'react-router-dom';

export function Layout({ title }: { title: string }) {
  return (
    <div className="shell">
      <header className="site-header">
        <Link to="/" className="site-title">
          {title}
        </Link>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
    </div>
  );
}
