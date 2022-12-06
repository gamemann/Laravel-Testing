import React from 'react';
import ReactDOM from 'react-dom/client';

import InfiniteScroll from 'react-infinite-scroller';

const lines = [
    "A magical line",
    "A cool line",
    "Another line",
    "Some random text",
    "Random text 2",
    "Best Mods testing!",
    "I feel sick.",
    "This is random."
];

var item_id = 0;


function loadMore(page)
{
    var toReturn = [];

    for (var i = 0; i < 100; i++)
    {
        item_id++;
        
        toReturn.push({id: item_id, name: lines[Math.floor(Math.random()*lines.length)]});
    }

    return toReturn;
}

var items = loadMore(1);

function Test() 
{
    return (
    <InfiniteScroll
        pageStart={1}
        loadMore={loadMore}
        loader={<div class="loadindicator" key={0}>Loading...</div>}>
        <ul id="contentList">
            {items.map(item => (
                <li key={item.id}>
                    <p>{item.name}</p>
                </li>
            ))}
        </ul>
    </InfiniteScroll>);
}


const content = ReactDOM.createRoot(document.getElementById('test'));
content.render(<Test />);