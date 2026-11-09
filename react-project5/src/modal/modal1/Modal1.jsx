import classes from "./Modal1.module.scss"
import { Photos } from "../../Photos.js"

export default function Modal1({ onClose }) {
    return (
        <div className={classes.overlay} onClick={onClose}>
            <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
                <div className={classes.left}>
                    <div className={classes.logo}>
                        <img src={Photos.logo} alt="Worktap" />
                    </div>

                    <div className={classes.form_wrapper}>
                        <span className={classes.subtitle}>Добро пожаловать!</span>
                        <h2>Войдите в свой аккаунт</h2>

                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className={classes.input_group}>
                                <label>E-mail</label>
                                <input type="email" placeholder="E-mail" />
                            </div>

                            <div className={classes.input_group}>
                                <label>Пароль</label>
                                <input type="password" placeholder="Пароль" />
                            </div>

                            <div className={classes.options}>
                                <label className={classes.remember}>
                                    <input type="checkbox" />
                                    <span>Запомнить меня</span>
                                </label>
                                <a href="#" className={classes.forgot}>Забыли пароль?</a>
                            </div>

                            <button type="submit" className={classes.submit_btn}>Войти</button>

                            <button type="button" className={classes.google_btn}>
                                <img src={Photos.google} alt="" />
                                Или войдите с помощью Google
                            </button>
                        </form>
                    </div>

                    <p className={classes.footer_text}>
                        У Вас все еще нет аккаунта? <a href="#">Зарегистрируйтесь бесплатно!</a>
                    </p>
                </div>

                <div className={classes.right}>
                    <button className={classes.close_btn} onClick={onClose}>&times;</button>
                    <div className={classes.info_card}>
                        <p>Worktap — это маркетплейс фриланс услуг, где можно купить услугу как товар в магазине или создать индивидуальный заказ на бирже.</p>
                    </div>
                    <div className={classes.dots}>
                        <span className={`${classes.dot} ${classes.active_dot}`}></span>
                        <span className={classes.dot}></span>
                        <span className={classes.dot}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}