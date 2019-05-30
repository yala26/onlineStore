import React , {Component} from 'react';
import c from "./css/contentStyle.module.css";
import Menu from "./menu.js";
import { Route, Link} from "react-router-dom";
import Catalog from "./catalog/catalog";
import Blog from "./blog/blog";
import Delivery from "./delivery/delivery";
import Compare from "./compare/compare";

export default class Navigator extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Menu />
                <Route path={"/catalog"} component={Catalog} />
                <Route path={"/blog"} component={Blog}/>
                <Route path={"/delivery"} component={Delivery}/>
                <Route path={"/compare"} component={Compare}/>
            </div>
        )
    }
}