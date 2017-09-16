import { createStore, reducer } from './redux';

describe('05 Test Redux Store', () => {
    test('Test Store shape', () => {
        const store = createStore(reducer, reducer(undefined, '@@INIT'));
        expect(typeof store.dispatch).toBe('function');
        expect(typeof store.getState).toBe('function');
    });
    test('Store getState method', () => {
        const store = createStore(reducer, reducer(null, '@@INIT'));
        expect(store.getState()).toBe(0);
    });
    test('Store mutation works', () => {
        const store = createStore(reducer, reducer(null, '@@INIT'));
        store.dispatch('INCREMENT');
        expect(store.getState()).toBe(1);
    });
    test('Store mutation works', () => {
        const store = createStore(reducer, reducer(null, '@@INIT'));
        store.dispatch('DECREMENT');
        expect(store.getState()).toBe(-1);
    });
})

describe('Test reducer', () => {
    expect(reducer(1, 'INCREMENT')).toBe(2);
    expect(reducer(10, 'DECREMENT')).toBe(9);
    expect(reducer(12, 'ADD', 5)).toBe(17);
})