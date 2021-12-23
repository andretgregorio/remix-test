import type { LinksFunction } from 'remix';
import { Link } from 'remix';
import stylesUrl from '../styles/index.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

function Index() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="text-yellow-600">
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes">Read Jokes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Index;
