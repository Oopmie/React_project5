import classes from "../P2_sec2/P2_sec2.module.scss"
import { Photos } from "../../../Photos.js"

export default function P2_sec2() {
    return (
        <section className={classes.P2_sec2}>
            <div className={classes.container}>
                <div className={classes.filter_panel}>
                    <div className={classes.count}>65 проектов по дизайну</div>
                    <div className={classes.filters}>
                        <input type="text" placeholder="Минимальная цена" />
                        <span className={classes.dash}>—</span>
                        <input type="text" placeholder="Максимальная цена" />
                        <select>
                            <option value="asc">По возрастанию цены</option>
                            <option value="desc">По убыванию цены</option>
                        </select>
                    </div>
                </div>

                <div className={classes.list}>
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className={classes.item}>
                            <div className={classes.left}>
                                <h2>Нужно сделать Дизайн сайта по тематике авто</h2>
                                <div className={classes.user}>
                                    <img src={Photos.p1s31} alt="" className={classes.avatar} />
                                    <div className={classes.user_info}>
                                        <h3>Екатерина Иванова</h3>
                                        <p>Размещено проектов на бирже: 25</p>
                                        <div className={classes.rating}>
                                            <img src={Photos.st4} alt="" />
                                            <span>15 отзывов</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.right}>
                                <div className={classes.budget}>Бюджет: 50 000 тенге</div>
                                <div className={classes.time}>4 часа 28 минут назад</div>
                                <div className={classes.offers}>Предложений: 50</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={classes.load_more}>
                    <button className={classes.loadBtn}>Загрузить еще</button>
                </div>
            </div>
        </section>
    )
}