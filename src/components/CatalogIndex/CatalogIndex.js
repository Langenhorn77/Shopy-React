import React, {Component} from 'react';
import Filters from '../Filters/Filters.js';
import ProductCardList from '../ProductCardList/ProductCardList.js';


class CatalogIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            maxIndex: 9,
            filterCategorie: '',
            filterPrice: '',
            filterSize: [ true, true, true, true],
            filterBrand: [
                true, true, true, true,
                ]
            }
        };

    onClickButton = () => {
        let count = this.state.maxIndex;
        count += 3;
        this.setState({maxIndex: count})
    };

    onClickFilterButton = (e) => {
        let promState = {...this.state};

       if(e.target.id === 'button0') {
           this.setState({filterCategorie: 'Male'})
       }
        if(e.target.id === 'button1') {
            this.setState({filterCategorie: 'Female'})
        }
        if(e.target.id === 'button2') {
            this.setState({filterCategorie: 'Children'})
        }
        if(e.target.id === 'button3') {
            this.setState({filterCategorie: 'Hot Deal'})
        }


        if(e.target.id === 'small') {
            promState.filterSize[0] = !(promState.filterSize[0]);
            this.setState({promState})
        }
        if(e.target.id === 'medium') {
            promState.filterSize[1] = !(promState.filterSize[1]);
            this.setState({promState})
        }
        if(e.target.id === 'large') {
            promState.filterSize[2] = !(promState.filterSize[2]);
            this.setState({promState})
        }
        if(e.target.id === 'x-large') {
            promState.filterSize[3] = !(promState.filterSize[3]);
            this.setState({promState})
        }


        if(e.target.id === 'reebok') {
            promState.filterBrand[0] = !(promState.filterBrand[0]);
            this.setState({promState})
        }
        if(e.target.id === 'adidas') {
            promState.filterBrand[1] = !(promState.filterBrand[1]);
            this.setState({promState})
        }
        if(e.target.id === 'nike') {
            promState.filterBrand[2] = !(promState.filterBrand[2]);
            this.setState({promState})
        }
        if(e.target.id === 'active') {
            promState.filterBrand[3] = !(promState.filterBrand[3]);
            this.setState({promState})
        }

    };

    render() {
        let promSize = {...this.state.filterSize};
        let promBrand = {... this.state.filterBrand};

        return (
            <main className="page-main">
                <h1 className="visually-hidden">Shopy Catalog</h1>
                <div className="page-main__wrapper">
                    <Filters
                        onAllClick={this.onClickFilterButton}
                        checkedSize={promSize}
                        checkedBrand={promBrand}

                />
                    <section className="catalog">
                        <ProductCardList
                            home={false}
                            maxIndex={this.state.maxIndex}
                            getStateFilterCategory = {this.state.filterCategorie}
                            StateFilterSize = {promSize}
                            StateFilterBrand = {promBrand}
                        />
                        {this.state.maxIndex < 15 ?

                            <button onClick={this.onClickButton} className="catalog__show show_btn" type="button" aria-label="Show More">
                                <img src="../../img/icon-dots.svg" alt="dots"/></button> :
                            null
                        }
                    </section>
                </div>

            </main>
        );
    }
}

CatalogIndex.propTypes = {};

export default CatalogIndex;
