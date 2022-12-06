import React from 'react';
import ReactDOM from 'react-dom/client';

import InfiniteScroll from 'react-infinite-scroller';

function Test() {
    return <p>LOLLOLOlOlOl</p>;
}

const content = ReactDOM.createRoot(document.getElementById('test'));
content.render(<Test />);