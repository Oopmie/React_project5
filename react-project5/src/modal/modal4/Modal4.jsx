import { useEffect } from 'react';
import { Photos } from '../../Photos.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import classes from './Modal4.module.scss';

export default function Modal4({ onClose, onSuccess }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSuccess) onSuccess();
    };

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
                        <p className={classes.subtitle}>Давайте восстановим Вам пароль</p>
                        <h2 className={classes.title}>Придумайте новый пароль</h2>

                        <form className={classes.form} onSubmit={handleSubmit}>
                            <div className={classes.inputGroup}>
                                <label htmlFor="newPassword">Пароль</label>
                                <input id="newPassword" type="password" placeholder="Пароль" />
                            </div>

                            <div className={classes.inputGroup}>
                                <label htmlFor="confirmNewPassword">Повторите пароль</label>
                                <input id="confirmNewPassword" type="password" placeholder="Пароль" />
                            </div>

                            <button type="submit" className={classes.loginBtn}>
                                Изменить пароль
                            </button>
                        </form>
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