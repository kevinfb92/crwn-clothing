import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
import React from 'react';

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className="preview">
            {
            items
            .filter((item, idx)=>idx < 4)//map only four
            .map (item => (
                <CollectionItem key={item.id} item={item}></CollectionItem>
            ))
            }            
        </div>
    </div>
)

export default CollectionPreview;