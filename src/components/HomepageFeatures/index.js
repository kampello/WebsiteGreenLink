import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Vegetais Frescos e Locais',
    images: [
      '/img/greenlink_vegetais1.jpg',
      '/img/tomato.jpg',
      '/img/brocoli.jpg',
    ],
    description:
      'Colhidos diariamente por agricultores locais, garantindo frescura, sabor e qualidade máxima.',
  },
  {
    title: 'Sustentabilidade em Primeiro Lugar',
    images: [
      '/img/AIMG1.jpg',
      '/img/AIMG2.jpeg',
      '/img/AIMG3.jpeg',
    ],
    description:
      'A Greenlink apoia práticas agrícolas responsáveis, reduzindo o impacto ambiental e promovendo o consumo consciente.',
  },
  {
    title: 'Encomendas Rápidas e Práticas',
    images: [
      '/img/AIMG4.jpg',
      '/img/AIMG5.jpg',
      '/img/AIMG6.jpg',
    ],
    description:
      'Escolha os seus vegetais, receba a encomenda no seu negócio e acompanhe todo o processo online.',
  },
  {
    title: 'Rastreabilidade dos Produtos',
    images: [
      '/img/AIMG7.jpg',
      '/img/AIMG8.jpg',
      '/img/AIMG9.jpg',
    ],
    description:
      'Saiba exatamente de onde vêm os seus produtos, quem os produziu e como chegaram até si.',
  },
  {
    title: 'Apoio ao Produtor Local',
    images: [
      '/img/AIMG10.jpg',
      '/img/AIMG11.jpg',
      '/img/AIMG12.jpg',
    ],
    description:
      'Valorizamos pequenos e médios agricultores, promovendo uma economia mais justa e sustentável.',
  },
  {
    title: 'Qualidade Garantida',
    images: [
      '/img/AIMG13.jpg',
      '/img/AIMG14.jpg',
      '/img/AIMG15.jpg',
    ],
    description:
      'Todos os produtos passam por controlo de qualidade para garantir segurança alimentar e excelência.',
  },
];

function ImageCarousel({ images, title }) {
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
          alt={`${title} ${index + 1}`}
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
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <div className="text--center">
        <ImageCarousel images={images} title={title} />
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
        {/* TÍTULO DA SEÇÃO */}
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">Porquê escolher a Greenlink?</Heading>
          <p className={styles.subtitle}>
            Conectamos produtores locais a negócios de forma sustentável,
            rápida e transparente.
          </p>
        </div>

        {/* FEATURES */}
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        {/* CALL TO ACTION */}
        <div className="text--center margin-top--xl">
          <a className="button button--primary button--lg" href="/docs/intro">
            Começar agora
          </a>
        </div>
      </div>
    </section>
  );
}
