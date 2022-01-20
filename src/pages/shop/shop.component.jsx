import React from 'react';
import "./shop.styles.scss";
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import { db, collection, onSnapshot } from '../../firebase/firebase.utils'

class ShopPage extends React.Component{
    unsuscribeFromSnapshot = null;

    componentDidMount(){
        const collectionRef = collection(db, "collections");
        onSnapshot(collectionRef, async snapshot => {
            console.log(snapshot);            
        })
    }

    render(){
        const {match} = this.props;
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} component = {CollectionOverview}></Route>
                <Route path = {`${match.path}/:categoryId`} component = {CollectionPage}></Route>
            </div>
        )
    }

}
export default ShopPage;