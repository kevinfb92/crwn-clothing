import React from "react";
import './collection-overview.styles.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({collections}) =>(
    <div className="shop-page">
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
        ))}
     </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect (mapStateToProps)(CollectionOverview);