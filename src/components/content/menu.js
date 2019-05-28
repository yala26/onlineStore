import React , {Component} from 'react';
import c from "./css/contentStyle.module.css";
import {Link} from "react-router-dom";

export default class Navigator extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className={`${c.navigator}`}>
                <ul className={`${c.nav}`}>
                    <li ><Link className={`${c.link}`} to={"catalog"}>catalog</Link></li>
                    <li ><Link className={`${c.link}`} to={"blog"}>Blog</Link></li>
                    <li ><Link className={`${c.link}`} to={"delivery"}>Delivery</Link></li>
                    <li ><Link className={`${c.link}`} to={"compare"}>Compare</Link></li>
                </ul>
            </div>
        )
    }
}