import {render, screen, cleanup} from '@testing-library/react'
import App from '../App';
test( 'Should render app.js' , ()=>{
    render(<App/>);
})