import classes from "../P3_sec2/P3_sec2.module.scss"
import { Photos } from "../../../Photos.js"

export default function P3_sec2() {
    return (
        <section className={classes.P3_sec2}>
            <div className={classes.container}>
                <h2>Мой ворки</h2>

                <div className={classes.grid}>
                    <div className={`${classes.card} ${classes.create_card}`}>
                        <img src={Photos.add} alt="" />
                        <span>Создать ворк</span>
                    </div>

                    {[...Array(11)].map((_, index) => (
                        <div key={index} className={`${classes.card}`}>
                            <div className={classes.image_block}>
                                <img src={Photos.work} alt="" />
                            </div>
                            <div className={classes.info_block}>
                                <h3>Дизайн сайта</h3>
                                <p>50 000 тенге</p>
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