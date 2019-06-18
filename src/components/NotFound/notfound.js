import React, {Component} from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import './notfound.css'

class NotFound extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <Header/>
                <hr/>
                <h1 className={'page-not-found'}>Страница не найдена. Ошибка 404.</h1>
                <hr/>
                <Footer/>
            </div>
        );
    }
}

NotFound.propTypes = {};

export default NotFound;
