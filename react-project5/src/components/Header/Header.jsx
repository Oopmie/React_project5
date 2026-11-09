import { NavLink } from 'react-router-dom'
import classes from "../Header/Header.module.scss"
import { Photos } from "../../Photos.js"
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import Modal1 from '../../modal/modal1/Modal1.jsx'


export default function Header() {
    const active = ({ isActive }) => `${classes.navlink} ${isActive ? classes.active : ""}`;
    const location = useLocation();
    const [open, setOpen] = useState(false)
    return (
        <>
            <header>
                <nav className={classes.nav}>
                    <div>
                        <div className={classes.logo}>
                            <img src={Photos.logo} alt="" />
                        </div>
                        <div className={classes.links}>
                            <NavLink to='/Page2' className={active}>Биржа</NavLink>
                            <NavLink>Ворки</NavLink>
                            <NavLink>Конкурсы</NavLink>
                            {location.pathname !== '/Page2' && location.pathname !== '/Page3' && (
                                <NavLink>Создать ворк</NavLink>
                            )}
                            <NavLink>Создать заказ</NavLink>
                        </div>
                    </div>
                    {location.pathname === '/' && (
                        <div className={classes.menuRight}>
                            <button className={classes.RegBtn}>Регистрация</button>
                            <button onClick={() => setOpen(true)} className={classes.LogBtn}>Войти</button>
                            {open && (
                                <Modal1 onClose={() => setOpen(false)}>
                                    <button>yoo</button>
                                </Modal1>
                            )}
                        </div>
                    )}
                    {(location.pathname === '/Page2' || location.pathname === '/Page3') && (
                        <div className={classes.profile}>
                            <div className={classes.buts}>
                                <img src={Photos.star} alt="" />
                                <img src={Photos.kol} alt="" />
                                <img src={Photos.com} alt="" />
                            </div>
                            <div className={classes.man}>
                                <NavLink to='/Page3' className={active}>Ернар Ибрагимов</NavLink>
                                <img src={Photos.nikita} alt="" />
                                <img className={classes.str} src={Photos.str} alt="" />
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        </>
    )
}