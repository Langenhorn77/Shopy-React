import React, {Component} from 'react';
import './advertizing.css';

class Advertizing extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <section className="advertizing">
                <h2 className="visually-hidden">Adv block</h2>
                <div className="advertizing__area-1">
                    <div className="advertizing__sale">
                        <p>Sale</p>
                        <span>50%</span>
                    </div>
                    <div className="advertizing__text">
                        <h3>FULL WINTER KIT</h3>
                        <p>Half Jacket + Skiny Trousers + Boot leather</p>
                    </div>
                    <button className="advertizing__buy" type="button">120<sub>$</sub></button>
                </div>
                <div className="advertizing__area-2">
                    <p>adv <span>area</span></p>
                    <p>470 x 100</p>
                </div>
            </section>
        );
    }
}

Advertizing.propTypes = {};

export default Advertizing;