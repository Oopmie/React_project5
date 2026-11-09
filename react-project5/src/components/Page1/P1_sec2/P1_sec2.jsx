import classes from "../P1_sec2/P1_sec2.module.scss"
import { Photos } from "../../../Photos.js"

export default function P1_sec2() {
    return (
        <section className={classes.P1_sec2}>
            <div className={classes.container}>
                <h2>Актуальные ворки</h2>
                <div className={classes.grid}>
                    <div className={classes.card}>
                        <div className={classes.user}>
                            <img src={Photos.p1s21} alt="" />
                            <h3>Сделать дизайн интернет-магазина</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
                        <button className={classes.btn_outline}>Посмотреть</button>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.user}>
                            <img src={Photos.p1s22} alt="" />
                            <h3>Верстка landing page</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
                        <button className={classes.btn_outline}>Посмотреть</button>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.user}>
                            <img src={Photos.p1s23} alt="" />
                            <h3>Сделать дизайн сайта-каталога и посадить на какой нибудь ко...</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
                        <button className={classes.btn_outline}>Посмотреть</button>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.user}>
                            <img src={Photos.p1s24} alt="" />
                            <h3>Продвижение instagram</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
                        <button className={classes.btn_outline}>Посмотреть</button>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.user}>
                            <img src={Photos.p1s25} alt="" />
                            <h3>Срочно! Нужен веб дизайнер!</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
                        <button className={classes.btn_outline}>Посмотреть</button>
                    </div>

                    <div className={`${classes.card} ${classes.all_works}`}>
                        <a href="#">Смотреть все ворки</a>
                    </div>
                </div>
            </div>
        </section>
    )
}