import classes from "../P2_sec1/P2_sec1.module.scss"
import Header from '../../Header/Header.jsx'
import { Photos } from "../../../Photos.js"

export default function P2_sec1() {
    return (
        <>
            <Header />
            <section className={classes.P2_sec1}>
                <div className={classes.container}>
                    <h1>Ищите и находите подходящую работу среди <span>10,000+</span> проектов и покажите на что Вы способны!</h1>
                    <div className={classes.input}>
                        <input type="text" name="" id="" placeholder="Какую работу ищете?" />
                        <button>Найти</button>
                    </div>
                    <div className={classes.categ}>
                        <button>Тексты и переводы</button>
                        <button>Разработка</button>
                        <button>Дизайн</button>
                        <button>Аудио, видео монтаж</button>
                        <button>SEO и оптимизация</button>
                        <button>Бизнес и жизнь</button>
                        <button>Соцсети и реклама</button>
                        <button>Все категории</button>
                    </div>
                    <h2>Ниже все заказы по <span>дизайну</span></h2>
                    <div className={classes.arrow}>
                        <img src={Photos.strg} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}