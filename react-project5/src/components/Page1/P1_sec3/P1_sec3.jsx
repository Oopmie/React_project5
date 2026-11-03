import classes from "../P1_sec3/P1_sec3.module.scss"
import { Photos } from "../../../Photos.js"

export default function P1_sec3() {
    return (
        <>
            <section className={classes.P1_sec3}>
                <h2>Топ фрилансеров</h2>
                <div className={classes.cards}>
                    <div className={classes.card}>
                        <div className={classes.top}>
                            <img src={Photos.p1s31} alt="" />
                            <div className={classes.right}>
                                <p>Марина Королёва</p>
                                <span>Разработчик PHP</span>
                                <p>Выполено проектов: 65</p>
                                <img src={Photos.st45} alt="" />
                            </div>
                        </div>
                        <button>Написать</button>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.top}>
                            <img src={Photos.p1s32} alt="" />
                            <div className={classes.right}>
                                <p>Семён Сергеев</p>
                                <span>Копирайтер</span>
                                <p>Выполено проектов: 104</p>
                                <img src={Photos.st4} alt="" />
                            </div>
                        </div>
                        <button>Написать</button>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.top}>
                            <img src={Photos.p1s33} alt="" />
                            <div className={classes.right}>
                                <p>Ангелина Сорокина</p>
                                <span>Дизайнер сайтов</span>
                                <p>Выполено проектов: 25</p>
                                <img src={Photos.st5} alt="" />
                            </div>
                        </div>
                        <button>Написать</button>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.top}>
                            <img src={Photos.p1s34} alt="" />
                            <div className={classes.right}>
                                <p>Никита Зайцев</p>
                                <span>Маркетолог</span>
                                <p>Выполено проектов: 144</p>
                                <img src={Photos.st4} alt="" />
                            </div>
                        </div>
                        <button>Написать</button>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.top}>
                            <img src={Photos.p1s35} alt="" />
                            <div className={classes.right}>
                                <p>Наталья Захарова</p>
                                <span>Motion дизайнер </span>
                                <p>Выполено проектов: 71</p>
                                <img src={Photos.st5} alt="" />
                            </div>
                        </div>
                        <button>Написать</button>
                    </div>
                    <div className={classes.lastCard}>
                        <a href="">Посмотреть всех ТОП фрилансеров</a>
                    </div>
                </div>
            </section>
        </>
    )
}