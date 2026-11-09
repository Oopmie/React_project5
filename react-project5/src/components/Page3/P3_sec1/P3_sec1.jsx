import classes from "../P3_sec1/P3_sec1.module.scss"
import Header from '../../Header/Header.jsx'
import { Photos } from "../../../Photos.js"

export default function P3_sec1() {
    return (
        <>
            <Header />
            <section className={classes.P3_sec1}>
                <div className={classes.quick_search}>
                    <span>Быстрый поиск ворков</span>
                    <img src={Photos.strw} alt="" className={classes.arrow} />
                </div>

                <div className={classes.container}>
                    <div className={classes.left}>
                        <span className={classes.prof}>Дизайнер</span>
                        <h1><span>Ернар</span> Ибрагимов</h1>
                        <p className={classes.desc}>
                            Работаю дизайнером с 1999 года. <br />
                            Был опыт в газетах, журналах, типографиях, рекламных агентствах, издательских домах... Порядка 8 лет занимаюсь логотипами и фирменными стилями.
                        </p>
                        <div className={classes.skills}>
                            <span>Figma</span>
                            <span>Adobe photoshop</span>
                            <span>Adobe illustrator</span>
                            <span>Corel draw</span>
                            <span>Adobe After Effects</span>
                            <span>HTML/CSS</span>
                        </div>
                        <button className={classes.dropdown_btn}>
                            Показать подробную информацию
                            <img src={Photos.str} alt="" />
                        </button>
                    </div>

                    <div className={classes.right}>
                        <div className={classes.avatar_wrapper}>
                            <img src={Photos.manon} alt="" className={classes.avatar} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}