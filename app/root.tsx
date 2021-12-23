import { Links, LiveReload, Outlet, LinksFunction } from 'remix';
import tailwindCss from './tailwind.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: tailwindCss,
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Voltz Store</title>
        <Links />
      </head>
      <body>
        <Outlet />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}
