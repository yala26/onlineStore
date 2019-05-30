import React , {Component} from 'react';
import c from "./css/catalogStyle.module.css";

export default class Catalog extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <p className={`${c.color}`}>catalog</p>
        )
    }
}