import React from 'react';
import logo from 'assets/png/64x64.png';

class PotatoLogo extends React.Component
{
    render(){
        return(
            <div className='potato--logo'>
                <img src={logo} width='51px'/>
                <div className='potato--logo-title'>Potato <sup>beta</sup></div>
            </div>
        );
    }
}
export default PotatoLogo