import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { collection as defaultCollection, stories as defaultStories, type Collection, type Story } from './content';
import { Layout } from './components/Layout';
import { CollectionPage } from './pages/CollectionPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ui } from './i18n/hi';

const StoryPage = lazy(() => import('./pages/StoryPage'));

interface AppProps {
  collection?: Collection;
  stories?: Story[];
}

export function App({ collection = defaultCollection, stories = defaultStories }: AppProps) {
  return (
    <Routes>
      <Route element={<Layout title={collection.title} />}>
        <Route index element={<CollectionPage collection={collection} stories={stories} />} />
        <Route
          path="kathaen/:slug"
          element={
            <Suspense
              fallback={
                <p className="state-message" role="status">
                  {ui.loading}
                </p>
              }
            >
              <StoryPage stories={stories} collectionTitle={collection.title} />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
