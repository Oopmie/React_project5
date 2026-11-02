import classes from "../Header/Header.module.scss"
import { Photos } from "../../Photos.js"

export default function Header() {
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <ul className={classes.menuLeft}>
                    <li><a href="#SUPPLEMENT">SUPPLEMENT</a></li>
                    <li><a href="#LASER">LASER</a></li>
                    <li>REVIEWS</li>
                    <li>JOURNAL</li>
                    <li>ABOUT</li>
                </ul>
                <div className={classes.logo}>
                    <img src={Photos.logo} alt="" />
                </div>
                <ul className={classes.menuRight}>
                    <li>HELP & SUPPORT</li>
                    <li>ACTIVATE</li>
                    <li>ACCOUNT</li>
                    <button className={classes.buyBtn}>BUY</button>
                </ul>
            </nav>
        </header>
    )
}