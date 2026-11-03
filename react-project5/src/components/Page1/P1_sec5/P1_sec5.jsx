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
                        <p>Оплачивайте с р/с или карты компании</p>
                    </div>
                    <div>
                        <img src={Photos.p1s52} alt="" />
                        <p>Оплачивайте с р/с или карты компании</p>
                    </div>
                    <div>
                        <img src={Photos.p1s53} alt="" />
                        <p>Оплачивайте с р/с или карты компании</p>
                    </div>
                    <h3>WorkTap — быстро, просто и безопасно!</h3>
                    <button>Начать!</button>
                </div>
            </section>
        </>
    )
}