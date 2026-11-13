import { NavLink } from 'react-router-dom'
import classes from "../Header/Header.module.scss"
import { Photos } from "../../Photos.js"
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import Modal1 from '../../modal/modal1/Modal1.jsx'
import Modal2 from '../../modal/modal2/Modal2.jsx'
import Modal3 from '../../modal/modal3/Modal3.jsx'
import Modal4 from '../../modal/modal4/Modal4.jsx'

export default function Header() {
    const active = ({ isActive }) => `${classes.navlink} ${isActive ? classes.active : ""}`;
    const location = useLocation();
    const [activeModal, setActiveModal] = useState(null);
    return (
        <>
            <header className={classes.header}>
                <nav className={classes.nav}>
                    <div className={classes.leftBlock}>
                        <div className={classes.logo}>
                            <img src={Photos.logo} alt="" />
                        </div>
                        <div className={classes.links}>
                            <NavLink to='/Page2' className={active}>Биржа</NavLink>
                            <NavLink to='/works' className={active}>Ворки</NavLink>
                            <NavLink to='/contests' className={active}>Конкурсы</NavLink>
                            {location.pathname !== '/Page2' && location.pathname !== '/Page3' && (
                                <NavLink to='/create-work' className={active}>Создать ворк</NavLink>
                            )}
                            <NavLink to='/create-order' className={active}>Создать заказ</NavLink>
                        </div>
                    </div>
                    {location.pathname === '/' && (
                        <div className={classes.menuRight}>
                            <button onClick={() => setActiveModal('register')} className={classes.RegBtn}>
                                Регистрация
                            </button>
                            <button onClick={() => setActiveModal('login')} className={classes.LogBtn}>
                                Войти
                            </button>
                            {activeModal === 'login' && (
                                <Modal1
                                    onClose={() => setActiveModal(null)}
                                    onSwitchToRegister={() => setActiveModal('register')}
                                    onSwitchToForgot={() => setActiveModal('forgot')}>
                                </Modal1>
                            )}
                            {activeModal === 'register' && (
                                <Modal2
                                    onClose={() => setActiveModal(null)}
                                    onSwitchToLogin={() => setActiveModal('login')}>
                                </Modal2>
                            )}
                            {activeModal === 'forgot' && (
                                <Modal3
                                    onClose={() => setActiveModal(null)}
                                    onSwitchToLogin={() => setActiveModal('login')}
                                    onSwitchToNewPassword={() => setActiveModal('newPassword')}>
                                </Modal3>
                            )}
                            {activeModal === 'newPassword' && (
                                <Modal4
                                    onClose={() => setActiveModal(null)}
                                    onSuccess={() => setActiveModal('login')}
                                />
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
                                <img src={Photos.man} alt="" />
                                <img className={classes.str} src={Photos.str} alt="" />
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        </>
    )
}