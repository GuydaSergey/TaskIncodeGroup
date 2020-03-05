import io from 'socket.io-client';
import Store from '../store/tickerStore';

const store = Store.getInstance();
let socket = null;

export const connect = (stockSymbol) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, (data) => {
            console.log(data);
        });

        socket.on(stockSymbol, (data) => {
            store.state = JSON.parse(data);
            console.log(store.state);
            store.reRender();
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};
