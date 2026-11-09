import classes from "../P3_sec3/P3_sec3.module.scss"
import { Photos } from "../../../Photos.js"

export default function P3_sec3() {
    return (
        <section className={classes.P3_sec3}>
            <div className={classes.container}>
                <h2>Отзывы</h2>

                <div className={classes.tabs}>
                    <button className={`${classes.tab} ${classes.activeTab}`}>Положительные (65)</button>
                    <button className={classes.tab}>Отрицательные (10)</button>
                </div>

                <div className={classes.grid}>
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className={classes.card}>
                            <div className={classes.user}>
                                <img src={Photos.nikita} alt="" className={classes.avatar} />
                                <div className={classes.meta}>
                                    <h3>Никита Евреев</h3>
                                    <img src={Photos.st4} alt="" className={classes.stars} />
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla.</p>
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