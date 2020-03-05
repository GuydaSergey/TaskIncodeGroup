import '../styles/application.scss';
// import {connect} from '../services';
import React, {PureComponent} from 'react';
import Store from '../store/tickerStore';

const store = Store.getInstance();
// connect('AAPL');

class Ticker extends PureComponent {

    componentWillMount() {
        this.setState(store.state);
    }

    render() {
        store.subscribe(this.componentWillMount.bind(this));
        return (
            <div className="ticker">
                <h3>exchange {this.state.exchange}</h3>
                <p>price{this.state.price}<br/><span>change{this.state.change}</span><br/><span>change_percent{this.state.change_percent}</span><br/><span>last_trade_time{this.state.last_trade_time}</span><br/><span>dividend{this.state.dividend}</span></p><br/>
            </div>
        );
    }
}

export default Ticker;
