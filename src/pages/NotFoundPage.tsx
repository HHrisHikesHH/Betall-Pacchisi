import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../components/useDocumentTitle';
import { ui } from '../i18n/hi';
import { Shell } from '../pothi/Shell';

export function NotFoundPage({ title = ui.notFoundTitle }: { title?: string }) {
  useDocumentTitle(title);
  return (
    <Shell>
      <main className="pothi-page">
        <div className="pothi-contents">
          <h1>{title}</h1>
          <p>{ui.notFoundBody}</p>
          <p>
            <Link to="/kathaen">{ui.backToCollection}</Link>
          </p>
        </div>
      </main>
    </Shell>
  );
}
