import classes from "../Footer/Footer.module.scss"
import { Photos } from "../../Photos.js"

export default function Footer() {
    return (
        <>
            <section className={classes.Footer}>
                <div className={classes.linksGrid}>
                    <div className={classes.column}>
                        <h3>Топ категории</h3>
                        <ul>
                            <li><a href="#">Тексты и переводы</a></li>
                            <li><a href="#">Разработка</a></li>
                            <li><a href="#">Дизайн</a></li>
                            <li><a href="#">Аудио, видео монтаж</a></li>
                            <li><a href="#">Соцсети и реклама</a></li>
                            <li><a href="#">Бизнес и жизнь</a></li>
                            <li><a href="#">SEO и оптимизация</a></li>
                        </ul>
                    </div>

                    <div className={classes.column}>
                        <h3>О Проекте</h3>
                        <ul>
                            <li><a href="#">О Нас</a></li>
                            <li><a href="#">Как Это Работает</a></li>
                            <li><a href="#">Политика Приватности</a></li>
                            <li><a href="#">Правила Пользования </a></li>
                            <li><a href="#">Пресса о нас</a></li>
                        </ul>
                    </div>

                    <div className={classes.column}>
                        <h3>Поддержка</h3>
                        <ul>
                            <li><a href="#">Контакты</a></li>
                            <li><a href="#">Политика Безопасности</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>

                    <div className={classes.column}>
                        <h3>Follow</h3>
                        <div className={classes.links}>
                            <img src={Photos.fb} alt="" />
                            <img src={Photos.twi} alt="" />
                            <img src={Photos.insta} alt="" />
                            <img src={Photos.ink} alt="" />
                        </div>
                    </div>
                </div>
                <h3>Copyright @ 2021  |  WorkTap – Worktap.KZ. All Rights Reserved</h3>
            </section>
        </>
    )
}