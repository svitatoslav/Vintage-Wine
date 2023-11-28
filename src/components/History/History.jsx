import React from 'react';
import Container from './../Container/Container';
import SectionTitle from './../Title/SectionTitle';

import styles from './History.module.scss';
const History = () => {
   return (
       <section>
           <Container>
               <SectionTitle secText={'History'} subText={'Our'} />
               <div className={styles.historyContent}>
                   <img src="https://res.cloudinary.com/dhpukux5x/image/upload/v1698005298/ypigdymn2pcmgi43evrt.png" alt="glass" />
                   {/* <img src="../../../public/imageProject/history/history.png" alt="glass" /> */}
                   <div className={styles.historyArticle}>
                       <div className={styles.author}>Victoria Markina</div>
                       <div className={styles.articleTitle}>From Dreaming to Tasting</div>
                       <article>
                           <p>Since childhood, Victoria Markina was a devoted fan of rural life and inspired by nature. She spent a lot of time in the family gardens and vineyards, helping her parents on the family land. This childhood passion became the seed that was born into her passionate love for winemaking.</p>
                           <p>After graduating from a higher educational institution in winemaking, Victoria decided to devote herself to winemaking. With the help of a small initial capital and a lot of determination, she founded her own winery - Vintage Wine</p>
                           <p>Her experience, tenacity and boundless passion have helped her create first-class wines that have won the acclaim of wine critics and won the loyalty of wine connoisseurs around the world. Many beginners benefited from her good advice and help in the art of winemaking, which she was always ready to support.</p>
                           <p>Today, Vigna Vita is a true symbol of elegance and taste. Victoria continues to improve her skills, giving the world wines of exquisite quality. Her story is a reminder that passion and dedication can lead to the greatest achievements, regardless of initial circumstances.</p>
                           <p>The secret of our success is attention to detail and constant striving for improvement. We develop, improve our skills and always remain true to our initial calling - to provide our customers with an unforgettable taste and experience. We invite you to travel with us to the world of winemaking, where every drop is a masterpiece, and every glass is a journey into an exquisite symphony of taste. Vintage Wine is your winery, where every wine is a story of passion and taste.</p>
                       </article>
                   </div>
               </div>
           </Container>
       </section>
   );
}


export default History;
