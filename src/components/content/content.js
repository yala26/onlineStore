import React , {Component} from 'react';
import c from "./css/contentStyle.module.css";

export default class Content extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className={c.div}>content</div>
        )
    }
}