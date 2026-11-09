import classes from "../P1_sec5/P1_sec5.module.scss"
import { Photos } from "../../../Photos.js"

export default function P1_sec5() {
    return (
        <>
            <section className={classes.P1_sec5}>
                <div className={classes.container}>
                    <h2>Как WorkTap помогает бизнесу?</h2>
                    <div>
                        <img src={Photos.p1s51} alt="" />
                        <h3>Оплачивайте с р/с или карты компании</h3>
                    </div>
                    <div>
                        <img src={Photos.p1s52} alt="" />
                        <h3>Экономьте до 87% бюджета на фрилансе</h3>
                    </div>
                    <div>
                        <img src={Photos.p1s53} alt="" />
                        <h3>Экономьте до 75% времени на решении фриланс задач</h3>
                    </div>
                    <h3 className={classes.h3t}>WorkTap — быстро, просто и безопасно!</h3>
                    <button>Начать!</button>
                </div>
            </section>
        </>
    )
}