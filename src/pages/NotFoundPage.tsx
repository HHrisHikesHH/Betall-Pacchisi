import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../components/useDocumentTitle';
import { ui } from '../i18n/hi';

export function NotFoundPage({ title = ui.notFoundTitle }: { title?: string }) {
  useDocumentTitle(title);
  return (
    <div className="state-message state-message--page">
      <h1 className="state-title">{title}</h1>
      <p>{ui.notFoundBody}</p>
      <p>
        <Link to="/">{ui.backToCollection}</Link>
      </p>
    </div>
  );
}
