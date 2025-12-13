import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Vegetais Frescos e Locais',
    images: [
      './img/greenlink_vegetais1.jpg',
      './img/tomato.jpg',
      './img/brocoli.jpg',
    ],
    description: (
      <>
        Colhidos diariamente por agricultores locais, garantindo frescura,
        sabor e qualidade máxima.
      </>
    ),
  },
  {
    title: 'Sustentabilidade em Primeiro Lugar',
    images: [
      './img/AIMG1.jpg',
      './img/AIMG2.jpeg',
      './img/AIMG3.jpeg',
    ],
    description: (
      <>
        A Greenlink apoia práticas agrícolas responsáveis, reduzindo o impacto
        ambiental e promovendo o consumo consciente.
      </>
    ),
  },
  {
    title: 'Encomendas Rápidas e Práticas',
    images: [
      './img/AIMG4.jpg',
      './img/AIMG5.jpg',
      './img/AIMG6.jpg',
    ],
    description: (
      <>
        Escolha os seus vegetais, receba a encomeda em seu negocio e siga os produtos online, aproveite a
        simplicidade de comprar produtos naturais online.
      </>
    ),
  },
];

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={styles.carousel}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          className={clsx(styles.carouselImage, {
            [styles.active]: index === current,
          })}
        />
      ))}
    </div>
  );
}

function Feature({ title, description, images }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <ImageCarousel images={images} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
