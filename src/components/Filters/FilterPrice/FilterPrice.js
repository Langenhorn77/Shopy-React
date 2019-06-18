import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './FilterPrice.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const styleTrack = [{width: 200,  top: '16px', 'background-color': '#34404b'}];
const styleHandle = [{width: 11,
    'height': 11,
    'border-radius': 10, top: 18,
    'background-color': '#34404b',
    'border-color': '#34404b',
}];
const StyleRail = {top: '16px', 'background-color': '#edf0f2'};

class FilterPrice extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="sliderStyle">
                <Range className="rangeStyle"
                       min ={0}
                       max ={500}
                       defaultValue={[100, 400]}
                       trackStyle = {styleTrack}
                       handleStyle ={styleHandle}
                       railStyle = {StyleRail}
                />
            </div>
        );
    }
}

FilterPrice.propTypes = {};

export default FilterPrice;
