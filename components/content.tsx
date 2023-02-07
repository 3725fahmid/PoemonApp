import * as React from 'react';
import Image from 'next/image'
import brash from '../public/Brush.png'
import pokimonPic1 from '../public/Image01.png'
import pokimonPic2 from '../public/Image02.png'
import pokimonPic3 from '../public/Image03.png'
import pokimonPic4 from '../public/Image04.png'
import pokimonPic5 from '../public/Image05.png'
import loopPic from '../public/Left.png'
import styles from '../styles/content.module.css'

const MediaCard = () => {
  return (
    <>
      <article className={styles.container}>
        <div className={styles.leftLoop}>
          <Image
            src={loopPic}
            alt="Looppic"
          />
        </div>
                <div>
                  <div className={styles.ArticelTitle}>
                    <Image
                      className={styles.ArticelImg}
                      src={brash}
                      alt="brash"
                    />
                    <h2> Ash & Pikachu Arrive in </h2><h2> Pokemon Universe</h2>
                  </div>
                  <article className={styles.ArticelContent}>
                    <div className={styles.LeftArtical}>
                      <Image
                        className={styles.img3}
                        src={pokimonPic3}
                        alt="pokimonPic"

                      />
                      <Image
                        className={styles.img2}
                        src={pokimonPic2}
                        alt="pokimonPic"

                      />
                      <Image
                        className={styles.img4}
                        src={pokimonPic4}
                        alt="pokimonPic"

                      />
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime eius, suscipit voluptates voluptatum sequi, necessitatibus, corrupti id provident quia totam corporis
                      </p>

                      <p>
                        Lorem ipsum dolor konok amet consectetur adipisicing elit. Tempora voluptatem a officia odio aperiam, dolore nostrum aliquam modi voluptates eum nesciunt quo in. Soluta iure laboriosam tempore id maiores commodi quidem, aliquam quis. Accusamus nemo animi qui voluptate itaque
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatem a officia odio aperiam, dolore nostrum aliquam modi voluptates eum nesciunt quo in. Soluta iure laboriosam tempore id maiores commodi quidem, aliquam quis. Accusamus nemo animi qui voluptate itaque possimus ut minima repellat magnam rem est vero esse repudiandae vel reprehenderit excepturi quibusdam delectus, quos harum eveniet! Reiciendis dolorem quisquam quia vitae, in blanditiis libero quas sint minus. Porro doloribus iste dicta. Dignissimos, magnam voluptatibus. Reiciendis quaerat obcaecati in asperiores tempora quam numquam labore doloribus dicta sint, quibusdam, reprehenderit neque veniam, necessitatibus ducimus dolore! Sed non optio officiis obcaecati quia?
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequatur perferendis reprehenderit, ab corrupti quia error maxime deleniti dolorem dicta consequuntur deserunt vero quasi minus dolor. Fugiat doloribus perspiciatis dolore voluptatem officia exercitationem veritatis eum voluptas blanditiis ut cum, soluta ratione neque quo nisi dolorem illo. Unde illo modi rerum sunt atque numquam! Nisi molestiae ratione corrupti distinctio rerum aliquid quas saepe inventore ullam corporis tenetur, modi eos sunt porro molestias et eligendi illum, dolore nihil, placeat minima repellendus praesentium. Eum eveniet pariatur cum, consequuntur architecto corporis a suscipit, id distinctio aut ad possimus, ipsa in eius officia magnam. Consectetur?
                      </p>
                    </div>
                    <div className={styles.rightArtical}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate atque cumque harum recusandae, architecto libero similique deserunt molestiae sapiente reprehenderit corporis vel magnam? Velit sequi nobis perferendis ipsum assumenda illo sed molestias non itaque incidunt, excepturi tenetur eaque nisi quia, odit nam officiis provident ullam! Amet expedita repudiandae alias recusandae!
                      </p>
                      <Image
                        className={styles.img5}
                        src={pokimonPic5}
                        alt="pokimonPic"

                      />
                      <Image
                        className={styles.img1}
                        src={pokimonPic1}
                        alt="pokimonPic"

                      />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem libero totam fugit, voluptatem id nisi aspernatur neque ea, voluptatum doloremque iusto placeat odio, quos corporis exercitationem. Voluptatem placeat quae facilis possimus, et, similique doloremque eveniet error enim harum maxime cum asperiores in quos autem reiciendis molestias cumque rem rerum. Tenetur nostrum, incidunt facilis repudiandae ad consectetur! Pariatur voluptate rerum ab, quis aut ad sapiente laudantium earum mollitia, enim repellat explicabo.
                      </p>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo a laudantium sint repellendus! Reiciendis quos nulla deserunt? Distinctio aliquam at perferendis illum aspernatur repudiandae nihil iusto autem qui pariatur minus nemo quibusdam obcaecati officiis, architecto iste consequatur ducimus provident velit unde assumenda laudantium totam inventore ipsum. Dolore non voluptate pariatur ut dicta a neque minus facere atque. Modi aliquam cupiditate autem saepe optio veniam voluptatem quod repudiandae inventore, tenetur accusantium.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit libero quos consectetur repellat, nesciunt labore quod quas voluptatibus voluptates, illo exercitationem perspiciatis itaque? Molestiae quisquam temporibus accusantium debitis voluptatibus quo ipsam eligendi corrupti nobis, necessitatibus fuga ab? Deserunt temporibus eius rem cupiditate dignissimos iure dicta laborum labore optio, sed culpa magnam consequatur? Rem minus exercitationem blanditiis dolorum, ipsam illo suscipit ad saepe cupiditate laudantium ratione quos quisquam ut qui accusantium voluptas incidunt ab. Eos possimus aliquam consequatur id illum ratione harum ducimus asperiores eum soluta, animi est, tempore incidunt eius mollitia porro odio dolorem! Laboriosam corporis labore repellendus. Amet, earum.
                      </p>
                    </div>
                  </article>
              </div>

                  <div className={styles.rightLoop}>
                    <Image
                      src={loopPic}
                      alt="loopPic"
                    />
                  </div>

      </article>

    </>
  );
}

export default MediaCard