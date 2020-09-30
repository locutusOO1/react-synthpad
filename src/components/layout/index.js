import React from 'react';
import { useAppContext } from '../../context';

export default ({ children }) => {
    const { state } = useAppContext()

    const styles = {
        display: 'grid',
        placeItems: 'center',
        heigh: '100vh',
        background: state.mode === 'light' ? 'beight' : '#061e3e'
    }

    return (
        <div style={ styles }>
            <div>{ children }</div>
        </div>
    )
}