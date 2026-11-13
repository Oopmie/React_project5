import { useEffect } from 'react';
import { Photos } from '../../Photos.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import classes from './Modal2.module.scss';

export default function Modal2({ onClose, onSwitchToLogin }) {
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
                        <p className={classes.subtitle}>Давайте создадим Вам аккаунт</p>
                        <h2 className={classes.title}>Заполните все поля</h2>

                        <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
                            <div className={classes.inputGroup}>
                                <label htmlFor="firstName">Ваше имя</label>
                                <input id="firstName" type="text" placeholder="Имя" />
                            </div>

                            <div className={classes.inputGroup}>
                                <label htmlFor="lastName">Ваше фамилия</label>
                                <input id="lastName" type="text" placeholder="Фамилия" />
                            </div>

                            <div className={classes.inputGroup}>
                                <label htmlFor="regEmail">E-mail</label>
                                <input id="regEmail" type="email" placeholder="E-mail" />
                            </div>

                            <div className={classes.inputGroup}>
                                <label htmlFor="phone">Номер телефона</label>
                                <input id="phone" type="tel" placeholder="Телефон" />
                            </div>

                            <div className={classes.inputGroup}>
                                <label htmlFor="regPassword">Пароль</label>
                                <input id="regPassword" type="password" placeholder="Пароль" />
                            </div>

                            <div className={classes.inputGroup}>
                                <label htmlFor="confirmPassword">Повторите пароль</label>
                                <input id="confirmPassword" type="password" placeholder="Пароль" />
                            </div>

                            <div className={classes.roleRow}>
                                <label className={classes.roleOption}>
                                    <input type="radio" name="role" value="executor" defaultChecked />
                                    <span className={classes.checkbox}></span>
                                    Я исполнитель
                                </label>
                                <label className={classes.roleOption}>
                                    <input type="radio" name="role" value="customer" />
                                    <span className={classes.checkbox}></span>
                                    Я заказчик
                                </label>
                            </div>

                            <button type="submit" className={classes.loginBtn}>
                                Зарегистрироваться
                            </button>
                        </form>

                        <p className={classes.registerText}>
                            У Вас есть аккаунт?
                            <a onClick={onSwitchToLogin}> Войдите</a>
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