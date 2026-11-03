import { NavLink } from 'react-router-dom'
import classes from "../Header/Header.module.scss"
import { Photos } from "../../Photos.js"

export default function Header() {
    const active = ({ isActive }) => `${classes.navlink} ${isActive ? classes.active : ""}`
    return (
        <>
            <header>
                <nav className={classes.nav}>
                    <div className={classes.logo}>
                        <img src={Photos.logo} alt="" />
                    </div>
                    <div className={classes.links}>
                        <NavLink to='/Page2' className={active}>
                            Биржа
                        </NavLink>
                        <NavLink>
                            Ворки
                        </NavLink>
                        <NavLink>
                            Конкурсы
                        </NavLink>
                        <NavLink>
                            Создать ворк
                        </NavLink>
                        <NavLink>
                            Создать заказ
                        </NavLink>
                    </div>
                    <ul className={classes.menuRight}>
                        <button className={classes.RegBtn}>Регистрация</button>
                        <button className={classes.LogBtn}>Войти</button>
                    </ul>
                </nav>
            </header>
        </>


        // <header className={classes.header}>
        //     <nav className={classes.nav}>
        //         <div className={classes.logo}>
        //             <img src={Photos.logo} alt="" />
        //         </div>
        //         <ul className={classes.menuLeft}>
        //             <li><a href="#SUPPLEMENT">SUPPLEMENT</a></li>
        //             <li><a href="#LASER">LASER</a></li>
        //             <li>REVIEWS</li>
        //             <li>JOURNAL</li>
        //             <li>ABOUT</li>
        //         </ul>

        //         <ul className={classes.menuRight}>
        //             <li>HELP & SUPPORT</li>
        //             <li>ACTIVATE</li>
        //             <li>ACCOUNT</li>
        //             <button className={classes.buyBtn}>BUY</button>
        //         </ul>
        //     </nav>
        // </header>
    )
}