import React , {Component} from 'react';
import c from "./css/headerStyle.module.css";

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <header className={c.header}>
                <div className={c.number}><h3 className={c.text}>+375(29)8236700<br /></h3></div>
                <div className={c.name}><h1 className={c.text}>Town</h1></div>
                <div className={c.log} ><h5 className={c.text}>login</h5></div>
            </header>
        )
    }
}