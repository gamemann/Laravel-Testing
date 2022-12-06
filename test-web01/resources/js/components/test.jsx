import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom/client';

import InfiniteScroll from 'react-infinite-scroller';

// Some random lines lol (I'm tired).
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

// Probably no need, but just in-case keep track of item ID globally.
var item_id = 0;

async function loadMore(page)
{
    var toReturn = [];

    for (var i = 0; i < 50; i++)
    {
        item_id++;
        
        toReturn.push({id: item_id, name: lines[Math.floor(Math.random()*lines.length)]});
    }

    return toReturn;
}

const App = () => 
{
    // Loggg
    console.log("Launching app...");

    // The stateful functionalreturn] = useState(0);
    const [items, setItems] = useState([]);
    const [fetching, setFetching] = useState(false);

    // If our page number is below one, set to one.
    if (pageNum < 1)
    {
        setPageNum(1);
    }

    const fetchItems = useCallback(
        // ASYNC.
        async () => {
            // If we're already fetching. Return.
            if (fetching) 
            {
                console.log("Already fetching! Returning...");

                return;
            }

            // We're fetching!
            setFetching(true);

            // Try to fetch new lines/data.
            try
            {
                console.log("Retrieving new items on page " + pageNum + "!");

                // Call our load more function.
                const newItems = await loadMore(pageNum);

                // Now set our items.
                setItems([...items, ...newItems]);
            }
            finally
            {
                // Increase page number and set fetching to false.
                setPageNum(pageNum + 1);

                setFetching(false);
            }
        },

        [items, fetching, pageNum]
    );

    return (
    <InfiniteScroll
        loadMore={fetchItems}
        hasMore={(pageNum <= 50)}
        loader={<div class="loadindicator">Loading...</div>}>
        <ol id="contentList">
            {items.map(item => (
                <li key={item.id}>
                    <p>{item.name}</p>
                </li>
            ))}
        </ol>
    </InfiniteScroll>);
};

const content = ReactDOM.createRoot(document.getElementById('test'));
content.render(<App/>);