import classes from "../P1_sec3/P1_sec3.module.scss"
import { Photos } from "../../../Photos.js"

export default function P1_sec3() {
    return (
        <section className={classes.P1_sec3}>
            <div className={classes.container}>
                <h2>Топ фрилансеров</h2>
                <div className={classes.grid}>
                    <div className={classes.card}>
                        <div className={classes.user_info}>
                            <div className={classes.avatar_block}>
                                <img src={Photos.p1s31} alt="" className={classes.avatar} />
                            </div>
                            <div className={classes.text_block}>
                                <h3>Марина Королёва</h3>
                                <span className={classes.prof}>Разработчик PHP</span>
                                <p>Выполнено проектов: 65</p>
                                <img src={Photos.st5} alt="5 звезд" className={classes.stars} />
                            </div>
                        </div>
                        <button className={classes.btn_outline}>Написать</button>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.user_info}>
                            <div className={classes.avatar_block}>
                                <img src={Photos.p1s32} alt="" className={classes.avatar} />
                            </div>
                            <div className={classes.text_block}>
                                <h3>Семён Сергеев</h3>
                                <span className={classes.prof}>Копирайтер</span>
                                <p>Выполнено проектов: 104</p>
                                <img src={Photos.st5} alt="5 звезд" className={classes.stars} />
                            </div>
                        </div>
                        <button className={classes.btn_outline}>Написать</button>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.user_info}>
                            <div className={classes.avatar_block}>
                                <img src={Photos.p1s33} alt="" className={classes.avatar} />
                            </div>
                            <div className={classes.text_block}>
                                <h3>Ангелина Сорокина</h3>
                                <span className={classes.prof}>Дизайнер сайтов</span>
                                <p>Выполнено проектов: 25</p>
                                <img src={Photos.st5} alt="5 звезд" className={classes.stars} />
                            </div>
                        </div>
                        <button className={classes.btn_outline}>Написать</button>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.user_info}>
                            <div className={classes.avatar_block}>
                                <img src={Photos.p1s34} alt="" className={classes.avatar} />
                            </div>
                            <div className={classes.text_block}>
                                <h3>Никита Зайцев</h3>
                                <span className={classes.prof}>Маркетолог</span>
                                <p>Выполнено проектов: 144</p>
                                <img src={Photos.st5} alt="5 звезд" className={classes.stars} />
                            </div>
                        </div>
                        <button className={classes.btn_outline}>Написать</button>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.user_info}>
                            <div className={classes.avatar_block}>
                                <img src={Photos.p1s35} alt="" className={classes.avatar} />
                            </div>
                            <div className={classes.text_block}>
                                <h3>Наталья Захарова</h3>
                                <span className={classes.prof}>Motion дизайнер</span>
                                <p>Выполнено проектов: 71</p>
                                <img src={Photos.st5} alt="5 звезд" className={classes.stars} />
                            </div>
                        </div>
                        <button className={classes.btn_outline}>Написать</button>
                    </div>

                    <div className={`${classes.card} ${classes.all_freelancers}`}>
                        <a href="#">Посмотреть всех ТОП фрилансеров</a>
                    </div>
                </div>
            </div>
        </section>
    )
}