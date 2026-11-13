import { useEffect } from 'react';
import { Photos } from '../../Photos.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import classes from './Modal1.module.scss';

export default function Modal1({ onClose, onSwitchToRegister,onSwitchToForgot }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div className={classes.overlay}>
            <div className={classes.modalFull}>
                <button className={classes.closeBtn} onClick={onClose}>
                    ✕
                </button>
                <div className={classes.leftcont}>
                    <div onClick={onClose}>
                        <img src={Photos.logo} alt="worktap" />
                    </div>

                    <div className={classes.formWrapper}>
                        <p className={classes.subtitle}>Добро пожаловать!</p>
                        <h2 className={classes.title}>Войдите в свой аккаунт</h2>

                        <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
                            <div className={classes.inputGroup}>
                                <label htmlFor="email">E-mail</label>
                                <input id="email" type="email" placeholder="E-mail" />
                            </div>

                            <div className={classes.inputGroup}>
                                <label htmlFor="password">Пароль</label>
                                <input id="password" type="password" placeholder="Пароль" />
                            </div>

                            <div className={classes.optionsRow}>
                                <label className={classes.rememberMe}>
                                    <input type="checkbox" />
                                    <span className={classes.checkbox}></span>
                                    Запомнить меня
                                </label>
                                <a onClick={onSwitchToForgot}>Забыли пароль?</a>
                            </div>

                            <button type="submit" className={classes.loginBtn}>
                                Войти
                            </button>

                            <button type="button" className={classes.googleBtn}>
                                <img src={Photos.google} alt="" />
                                Или войдите с помощью Google
                            </button>
                        </form>

                        <p className={classes.registerText}>
                            У Вас все еще нет аккаунта?
                            <a onClick={onSwitchToRegister}>  Зарегистрируйтесь бесплатно!</a>
                        </p>
                    </div>
                </div>
                <div className={classes.rightcont}>
                    <Swiper
                        spaceBetween={0}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className={classes.mySwiper}
                    >
                        <SwiperSlide>
                            <img src={Photos.modal1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Photos.modal2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Photos.modal3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Photos.modal4} alt="" />
                        </SwiperSlide>
                    </Swiper>

                    <div className={classes.infoCard}>
                        <p>
                            Worktap — это маркетплейс фриланс услуг, где можно купить услугу как
                            товар в магазине или создать индивидуальный заказ на бирже.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}