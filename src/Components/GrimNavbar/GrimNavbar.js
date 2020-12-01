
import React,{Component} from 'react';

import {GrimMenuitems} from '../GrimMenuitems/GrimMenuItems';
import './GrimNavbar.css';

export class GrimNavbar extends Component {
    state = {
        clickmenu:'false',
        clicklogo:'false' 
    }

    handleClicklogo = () =>{
       this.setState({clicklogo:!this.state.clicklogo}) 
    }

    handleClickmenu = () =>{
      this.setState({clickmenu:!this.state.clickmenu})
    }

    render(){
        return(
            
                <nav className='GrimNav-Items'> 
                  <h1 className="nav-logo" onClick={this.handleClicklogo}>Turf it up! 
                      <i  className= {this.state.clicklogo ? 'fas fa-baseball-ball' : 'fas fa-futbol' }></i>
                  </h1>
                    <div className= "Menu-icon" onClick={this.handleClickmenu}>
                      <i className= {this.state.clickmenu ? 'fas fa-times': 'fas fa-bars'}></i>
                  </div>
                    <ul className= {this.state.clickmenu ? 'nav-menu active': 'nav-menu'}> 
                    { GrimMenuitems.map((item,index)=>{
                        return(
                            <li key ={index}>
                                <a className={item.cName} href={item.url}>
                                  {item.title}
                                </a>
                            </li>) } ) }
                    </ul>
                    
                          
                 </nav> )
    }
}