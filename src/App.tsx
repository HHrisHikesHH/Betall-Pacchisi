import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { collection as defaultCollection, stories as defaultStories, type Collection, type Story } from './content';
import { ui } from './i18n/hi';
import { CollectionPage } from './pages/CollectionPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ReadingProvider } from './reader/ReadingContext';

const StoryPage = lazy(() => import('./pages/StoryPage'));

interface AppProps {
  collection?: Collection;
  stories?: Story[];
}

export function App({ collection = defaultCollection, stories = defaultStories }: AppProps) {
  return (
    <ReadingProvider>
      <Routes>
        <Route index element={<HomePage collection={collection} />} />
        <Route path="kathaen" element={<CollectionPage collection={collection} stories={stories} />} />
        <Route
          path="kathaen/:slug"
          element={
            <Suspense fallback={<p role="status">{ui.loading}</p>}>
              <StoryPage stories={stories} collectionTitle={collection.title} />
            </Suspense>
          }
        />
        <Route path="pothi" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ReadingProvider>
  );
}
