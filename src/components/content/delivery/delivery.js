import React , {Component} from 'react';
import c from "./css/deliveryStyle.module.css";

export default class Delivery extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <p className={c.delivery}><h1>delivery</h1></p>
                <p >Our online store delivers in Moscow and regions of Russia:</p><br/>

                <p className={c.text} >1:Courier delivery in Moscow - 200 rubles.</p>
                <p className={c.text}>2:Postal delivery in Russia - from 150 rubles. depending on the shipping address.</p>
                <p className={c.text}>3:This page can be edited in the Site-> Menus and Pages section. Customize the calculation of shipping costs when placing an order can be configured in Settings -> Delivery.</p>

            </div>
        )
    }
}