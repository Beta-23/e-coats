import React from 'react';

import './collection-preview.styles.scss';

// Needs to be optimize, anonymous functions gets rendered every time the CollectionPreview component gets called
const CollectionPreview = ({ title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    </div>
);

export default CollectionPreview;