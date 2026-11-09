import classes from "./Footer.module.scss"
import { Photos } from "../../Photos.js"

export default function Footer() {
    return (
        <footer className={classes.Footer}>
            <div className={classes.container}>
                <div className={classes.top}>
                    <div className={classes.col}>
                        <h4>Топ категории</h4>
                        <a href="#">Тексты и переводы</a>
                        <a href="#">Разработка</a>
                        <a href="#">Дизайн</a>
                        <a href="#">Аудио, видео монтаж</a>
                        <a href="#">Соцсети и реклама</a>
                        <a href="#">Бизнес и жизнь</a>
                        <a href="#">SEO и оптимизация</a>
                    </div>
                    
                    <div className={classes.col}>
                        <h4>О Проекте</h4>
                        <a href="#">О Нас</a>
                        <a href="#">Как Это Работает</a>
                        <a href="#">Политика Приватности</a>
                        <a href="#">Правила Пользования</a>
                        <a href="#">Пресса о нас</a>
                    </div>
                    
                    <div className={classes.col}>
                        <h4>Поддержка</h4>
                        <a href="#">Контакты</a>
                        <a href="#">Политика Безопасности</a>
                        <a href="#">FAQ</a>
                    </div>
                    
                    <div className={classes.col}>
                        <h4>Follow</h4>
                        <div className={classes.socials}>
                            <a href="#"><img src={Photos.fb} alt="Facebook" /></a>
                            <a href="#"><img src={Photos.twi} alt="Twitter" /></a>
                            <a href="#"><img src={Photos.insta} alt="Instagram" /></a>
                            <a href="#"><img src={Photos.ink} alt="LinkedIn" /></a>
                        </div>
                    </div>
                </div>
                <div className={classes.bottom}>
                    <p>Copyright @ 2021 | WorkTap – Worktap.KZ. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}
