import React, {Component} from 'react';
import dots from '../../img/icon-dots.svg';
import ProductCardList from '../ProductCardList/ProductCardList.js'
import './arrivals.css';

class Arrivals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            maxIndex: 4
        };
    }

    onClickButton = () => {
        let count = this.state.maxIndex;
        count += 4;
        this.setState({maxIndex: count})
    };

    render() {
        return (
            <section className="arrivals">
                <h2 className="arrivals__name"><span>NEW</span> ARRIVALS</h2>
                <p className="arrivals__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry</p>
                <ProductCardList
                    home={true}
                    maxIndex={this.state.maxIndex}/>
                {this.state.maxIndex < 16 ?
                    <button onClick={this.onClickButton} className="arrivals__show show_btn" type="button" aria-label="Show More">
                        <img src={dots} alt="dots"/></button> :
                    null
                }
            </section>
        );
    }
}

Arrivals.propTypes = {};

export default Arrivals;
