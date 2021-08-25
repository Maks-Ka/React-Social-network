import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'
import styles from './News.module.css'


const News = () => {
    return (
        <div className={styles.nav}>
            <header>
                <div className={styles.navigationContainer}>
                    <div className={styles.topHead}>
                        <div className={styles.webName}>
                            <h1>TECHNEWS</h1>
                        </div>

                        <div className={styles.hamBtn}>
                            <span>
                                <i className={styles.fasFaBars}></i>
                            </span>
                        </div>

                        <div className={styles.timesBtn}>
                            <span>
                                <i className={styles.fasFaTimes}></i>
                            </span>
                        </div>
                    </div>

               {/* nav bar */}

                    <div className={styles.navBar}>
                        <nav>
                            <ul>
                                <li><a href="#">home</a></li>
                                <li><a href="#">current affairs</a></li>
                                <li><a href="#">archive</a></li>
                                <li><a href="#">featured</a></li>
                                <li><a href="#">broadcast</a></li>
                                <li><a href="#">category</a></li>
                            </ul>
                        </nav>
                    </div>

                {/*  social icons */}
                    <div className={styles.socialIcons}>
                        <ul>
                            <li>
                                <a href="#"><i className={styles.fabFaFfacebook} ></i></a>
                            </li>
                            <li>
                                <a href="#"><i className={styles.fabFaTwitter} ></i></a>
                            </li>
                            <li>
                                <a href="#"><i className={styles.fabFaInstagram} ></i></a>
                            </li>
                            <li>
                                <a href="#"><i className={styles.fabFaYoutube} ></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <section className={styles.banner}>
                <div className={styles.bannerMainContent} >
                    <h2>GET THE WORLD'S LATEST TECH NEWS</h2>
                    <h3>World's Leading Tech News Portal</h3>

                    <button>
                        <a href="#">Know More</a>
                    </button>

                    <div className={styles.currentNewsHead} >
                        <h3>Apple Glasses: What we expect, what we think we are <span>by scott stein</span></h3>

                        <h3>What's it's like to have Elon Musk's old phone number <span>by abrar al-heeti</span></h3>

                        <h3>Watch the exact moment Chris Pratt accidentally deletes 51, 000 emials <span>by goel fashingbauer</span></h3>

                        <h3>Richard Branson's Virgin Orbit will launch a rocket from midair Sunday <span>by eric mack</span></h3>
                    </div>
                </div>

                <div className={styles.bannerSubContent} >
                    <div className={styles.hotTopic}>
                        <img src='./images/banner-news-1.jpg' />

                        <div className={styles.hotTopicContent}>
                            <h2>Twitter's New Retweet With Comment Counter Is Now Available On Andriod & Web</h2>

                            <h3>New Topic 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur nostrum minus iusto fugit unde.</p>
                            <a href="#">Read More</a>
                        </div>

                    </div>

                    <div className={styles.hotTopic}>
                        <img src='./images/banner-news-2.jpg'  />

                        <div cclassName={styles.hotTopicContent}>
                            <h2>Twitter's New Retweet With Comment Counter Is Now Available On Andriod & Web</h2>

                            <h3>New Topic 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur nostrum minus iusto fugit unde.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>

                    <div className={styles.hotTopic}>
                        <img src="images/banner-news-3.jpg"  />

                        <div className={styles.hotTopicContent} >
                            <h2>Twitter's New Retweet With Comment Counter Is Now Available On Andriod & Web</h2>

                            <h3>New Topic 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur nostrum minus iusto fugit unde.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>

                    <div className={styles.hotTopic}>
                        <img src="images/banner-news-4.jpg" />

                        <div className={styles.HotTopicContent}>
                            <h2>Twitter's New Retweet With Comment Counter Is Now Available On Andriod & Web</h2>

                            <h3>New Topic 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur nostrum minus iusto fugit unde.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </section>

            <div>

                <main>
                    <section className={styles.mainContainerLeft} >
                        <h2>Top Stories</h2>
                        <div className={styles.containerTopLeft} >
                            <article>
                                <img src="images/top-left.jpg" />

                                <div>
                                    <h3>Best Used Cars Under $20, 000 for families</h3>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ea sint, nisi rem earum fugit? Facere veritatis sapiente eveniet quibusdam.</p>

                                    <a href="#">Read More <span> "{'>>'}" </span></a>
                                </div>
                            </article>
                        </div>

                        <div className={styles.containerBottomLeft} >
                            <article>
                                <img src="images/bottom-left-1.jpg" />
                                <div>
                                    <h3>Best smart speakers for the year</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi iure modi animi cupiditate. Explicabo, nihil?</p>

                                    <a href="#">Read More <span> "{'>>'}" </span></a>
                                </div>
                            </article>

                            <article>
                                <img src='images/bottom-left-2.jpg'  />
                                    <div>
                                        <h3>iPad Pro, reviewed: Has the iPad become my main computer now?</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi iure modi animi cupiditate. Explicabo, nihil?</p>

                                        <a href="#">Read More <span> "{'>>'}" </span></a>
                                    </div>
                                    </article>
                              </div>
                        </section>

                        <section className={styles.mainContainerRight}>
                            <h2>Latest Stories</h2>

                            <article>
                                <h4>just in </h4>
                                <div>
                                    <h2>Here's how to track your stimulus check with the IRS Get My Payment Portal</h2>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                                    
                                    <a href="#">Read More <span> "{'>>'}" </span></a>
                                </div>
                                <img src="images/right-1.jpg" />
                            </article>

                            <article>
                                <h4>just in </h4>
                                <div>
                                    <h2>The best outdoor games to play with your family</h2>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                                    <a href="#">Read More <span> "{'>>'}" </span></a>
                                </div>
                                <img src="images/right-2.jpg" />
                            </article>

                            <article>
                                <h4>just in </h4>
                                <div>
                                    <h2>Why walk? Check out the best electric scooters and e-bikes for 2020</h2>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                                    <a href="#">Read More <span> "{'>>'}" </span></a>
                                </div>
                                <img src="images/right-3.jpg" />
                            </article>

                            <article>
                                <h4>just in </h4>
                                <div>
                                    <h2>Disneyland Paris will stream its Lion King stage show Friday night</h2>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                                    <a href="#">Read More <span> "{'>>'}" </span></a>
                                </div>
                                <img src="images/right-4.jpg" />
                            </article>

                            <article>
                                <h4>just in </h4>
                                <div>
                                    <h2>Looking at a phone's lock screen also requries a warrant, judge rules</h2>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                                    <a href="#">Read More <span> "{'>>'}" </span></a>
                                </div>
                                <img src="images/right-5.jpg" />
                            </article>
                        </section>
                 </main>

                    <footer>
                        <div className={styles.footerContainer}>
                            <div className={styles.footerLeft} >
                                <h2>TECHNEWS</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur molestias aut blanditiis totam quia enim, autem tenetur cum facere, fugit beatae at voluptas ipsum perferendis!</p>
                            </div>

                            <div className={styles.FooterRight}>
                                <h2>Newletter</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, autem!</p>

                                <div>
                                    <input type='text' placeholder='email address'/>
                                        <i className={styles.fasFaEnvelope} ></i>
                                </div>
                            </div>
                        </div>

                            <p>Copyright &copy; 2025 All rights reserved | GeekProbin</p>
                    </footer>
                    </div>        
        </div>)

}

                    export default News