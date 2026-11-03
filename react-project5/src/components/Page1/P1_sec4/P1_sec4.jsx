import classes from "../P1_sec4/P1_sec4.module.scss"
import { Photos } from "../../../Photos.js"

export default function P1_sec4() {
    return (
        <>
            <section className={classes.P1_sec4}>
                <div className={classes.text}>
                    <h2>Как решать задачи на WorkTap?</h2>
                    <p>Идеально подходит для бизнеса и частных лиц</p>
                </div>
                <div className={classes.cards}>
                    <div className={classes.card}>
                        <img src={Photos.p1s41} alt="" />
                        <h3>Выберите услугу</h3>
                        <p>В супермаркете WorkTap представлен широкий выбор услуг от квалифицированных специалистов.</p>
                    </div>
                    <div className={classes.card}>
                        <img src={Photos.p1s42} alt="" />
                        <h3>Оплатите</h3>
                        <p>Деньги будут перечислены продавцу после того, как он выполнит работу, и вы её одобрите. </p>
                    </div>
                    <div className={classes.card}>
                        <img src={Photos.p1s43} alt="" />
                        <h3>Получите результат</h3>
                        <p>Наш супермаркет гарантирует вам возврат средств в полном объёме в случае невыполнения заказа.</p>
                    </div>
                </div>
            </section>
        </>
    )
}