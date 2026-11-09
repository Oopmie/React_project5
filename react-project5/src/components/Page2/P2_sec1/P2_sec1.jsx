import classes from "../P2_sec1/P2_sec1.module.scss"
import Header from '../../Header/Header.jsx'
import { Photos } from "../../../Photos.js"

export default function P2_sec1() {
    return (
        <>
            <Header />
            <section className={classes.P2_sec1}>
                <div className={classes.container}>
                    <div className={classes.rcontainer}>
                        <h1>Покупайте фриланс-услуги в <span>два клика</span></h1>
                        <h2>Ворк — единица работы продавца, которую можно купить как товар в магазине </h2>
                        <div className={classes.input}>
                            <input type="text" name="" id="" placeholder="Что нужно сделать?" />
                            <button>Найти</button>
                        </div>
                        <h3>Выберите рубрику, чтобы начать</h3>
                        <div className={classes.categ}>
                            <button>Тексты и переводы</button>
                            <button>Разработка</button>
                            <button>Дизайн</button>
                            <button>Аудио, видео монтаж </button>
                            <button>SEO и оптимизация</button>
                            <button>Бизнес и жизнь</button>
                            <button>Соцсети и реклама</button>
                            <button>Все категории</button>
                        </div>
                    </div>
                    <div className={classes.image}>
                        <img src={Photos.p1s1} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}