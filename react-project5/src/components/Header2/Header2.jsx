import { NavLink } from 'react-router-dom'
import classes from "../Header/Header.module.scss"
import { Photos } from "../../Photos.js"

export default function Header2() {
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
                            Создать заказ
                        </NavLink>
                    </div>
                    <ul className={classes.menuRight}>
                        <img src={Photos.star} alt="" />
                        <img src={Photos.star} alt="" />
                        <img src={Photos.star} alt="" />
                        <a href="Ернар Ибрагимов"></a>
                        <img src={Photos.man} alt="" />
                        <img src={Photos.str} alt="" />
                    </ul>
                </nav>
            </header>
        </>
    )
}