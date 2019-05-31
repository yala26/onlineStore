import React, {Component} from 'react';
import c from "./css/contentStyle.module.css";
import {Link} from "react-router-dom";

export default class Navigator extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <nav className={`${c.menu}`}>
                <ul >
                    <li>
                        <Link className={`${c.link}`} to={"catalog"}>catalog</Link>
                        <ul>
                            <li><Link className={`${c.link}`} to={"catalog"}>dog</Link></li>
                            <li><Link className={`${c.link}`} to={"catalog"}>cat</Link></li>
                            <li><Link className={`${c.link}`} to={"catalog"}>fish</Link></li>
                            <li><Link className={`${c.link}`} to={"catalog"}>bird</Link></li>
                        </ul>
                    </li>
                    <li><Link className={`${c.link}`} to={"blog"}>Blog</Link></li>
                    <li><Link className={`${c.link}`} to={"delivery"}>Delivery</Link></li>
                    <li><Link className={`${c.link}`} to={"compare"}>Compare</Link></li>
                </ul>
            </nav>

        )
    }
}