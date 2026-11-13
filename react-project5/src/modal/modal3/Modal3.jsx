import { useEffect } from 'react';
import { Photos } from '../../Photos.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import classes from './Modal3.module.scss';

export default function Modal3({ onClose, onSwitchToLogin, onSwitchToNewPassword }) {
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
                    <div className={classes.logo} onClick={onClose}>
                        <img src={Photos.logo} alt="worktap" />
                    </div>

                    <div className={classes.formWrapper}>
                        <p className={classes.subtitle}>Мы отправим Вам код для восстановления пароля</p>
                        <h2 className={classes.title}>Заполните поле ниже</h2>

                        <form
                            className={classes.form}
                            onSubmit={(e) => {
                                e.preventDefault();
                                onSwitchToNewPassword();
                            }}>
                            <div className={classes.inputGroup}>
                                <label htmlFor="resetEmail">E-mail</label>
                                <input id="resetEmail" type="email" placeholder="E-mail" />
                            </div>

                            <div className={classes.inputGroup}>
                                <label htmlFor="resetCode">Код</label>
                                <input id="resetCode" type="text" placeholder="Код из почты" />
                            </div>

                            <button type="submit" className={classes.loginBtn}>
                                Отправить код
                            </button>
                        </form>

                        <p className={classes.registerText}>
                            Вспомнили пароль?
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