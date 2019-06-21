import React, { Suspense } from 'react';
// import logo from './logo.svg';
import './App.css';
import './style.css';
import './fontawesome/css/all.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import InfiniteScroll from 'react-infinite-scroller';
// import AmiiboList from './component/amiibo/list';
const AmiiboList = React.lazy(() => import('./component/amiibo/list'))


const App = () => {
  return (
    <Suspense fallback>
      <InfiniteScroll
        pageStart={0}
        loadMore={() => { }}
        hasMore={true || false}
        loader={<div className="loader" key={0}>
          <div className="loading-1"></div>
          <div className="loading-2"></div>
          <div className="loading-3"></div>
          <div className="loading-4"></div>
        </div>}
      >
        <AmiiboList />
      </InfiniteScroll>
    </Suspense>
  );
}

export default App;
