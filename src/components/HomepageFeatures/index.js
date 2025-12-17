import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
const SocialPartners = [
  {
    name: 'Cooperativa X',
    logo: './img/1.png',
  },
  {
    name: 'Associação Y',
    logo: './img/2.png',
  },
  {
    name: 'Projeto Z',
    logo: './img/3.png',
  },
  {
    name: 'Iniciativa W',
    logo: './img/4.png',
  },
];

const FeatureList = [
  {
    title: 'Vegetais Frescos e Locais',
    images: ['./img/greenlink_vegetais1.jpg', './img/tomato.jpg', './img/brocoli.jpg'],
    description: (
      <>
        Colhidos diariamente por agricultores locais, garantindo frescura, sabor e qualidade máxima.
      </>
    ),
  },
  {
    title: 'Sustentabilidade em Primeiro Lugar',
    images: ['./img/AIMG1.jpg', './img/AIMG2.jpeg', './img/AIMG3.jpeg'],
    description: (
      <>
        A GreenLink apoia práticas agrícolas responsáveis, reduzindo o impacto ambiental e promovendo o consumo consciente.
      </>
    ),
  },
  {
    title: 'Encomendas Rápidas e Práticas',
    images: ['./img/AIMG4.jpg', './img/AIMG5.jpg', './img/AIMG6.jpg'],
    description: (
      <>
        Escolha os seus vegetais, receba a encomenda no seu negócio e acompanhe os produtos online.
      </>
    ),
  },
];

const Capabilities = [
  {
    title: 'Gestão de Produtos e Stock',
    text: 'Catálogo de vegetais, unidades, lotes, disponibilidade e alertas de reposição.',
  },
  {
    title: 'Clientes, Fornecedores e Encomendas',
    text: 'Registo rápido, histórico de compras, encomendas por estado e notas internas.',
  },
  {
    title: 'Faturação e Relatórios',
    text: 'Resumo diário/semanal, margens, produtos mais vendidos e exportação de dados.',
  },
];

const HowItWorks = [
  {step: '1', title: 'Regista produtos e fornecedores', text: 'Cria o catálogo e define preços e unidades.'},
  {step: '2', title: 'Recebe encomendas', text: 'Organiza por estado: pendente, em preparação, entregue.'},
  {step: '3', title: 'Entrega e acompanha', text: 'Confirma entrega, atualiza stock e analisa relatórios.'},
];
function SocialPartnersGrid({items}) {
  return (
    <div className={styles.partnersGrid}>
      {items.map((p) => (
        <Link
          key={p.name}
          href={p.url}
          className={styles.partnerItem}
        >
          <img
            src={p.logo}
            alt={p.name}
            className={styles.partnerLogo}
            loading="lazy"
          />
        </Link>
      ))}
    </div>
  );
}

function ImageCarousel({images}) {
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
          alt=""
          className={clsx(styles.carouselImage, {[styles.active]: index === current})}
          loading="lazy"
        />
      ))}
    </div>
  );
}

function Feature({title, description, images}) {
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

function Section({title, subtitle, children}) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">{title}</Heading>
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      {/* Top features */}
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      {/* Open source */}
      <Section
        title="Open source"
        subtitle="Contribuições são bem-vindas — issues, melhorias na docs e sugestões."
      >
        <div className="row">
          
          {/* Coluna esquerda — texto */}
          <div className="col col--6">
            <div className={styles.card}>
              <ul className={styles.list}>
                <li><b>Transparente:</b> código e evolução em público.</li>
                <li><b>Modular:</b> fácil de adaptar a diferentes negócios.</li>
                <li><b>Comunidade:</b> melhorias guiadas por utilizadores reais.</li>
              </ul>

              <div className={styles.actions}>
                <Link
                  className="button button--primary button--lg"
                  href="https://github.com/kampello/GreenLink/"
                >
                  Ver no GitHub
                </Link>

                <Link
                  className="button button--secondary button--lg"
                  to="/docs/intro"
                >
                  Começar agora
                </Link>
              </div>
            </div>
          </div>

          {/* Coluna direita — imagem */}
          <div className="col col--6" style={{ textAlign: "center" }}>
            <img
              src="./img/pc-green.png"
              alt="GreenLink terminal"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "12px"
              }}
            />
          </div>

        </div>
      </Section>

      <Section
        title="Empresas parceiras"
        subtitle="Organizações que partilham os mesmos valores de sustentabilidade e impacto social."
      >
        <div className="row">
          <div className="col col--10 col--offset-1">
            <div className={styles.card}>
              <SocialPartnersGrid items={SocialPartners} />
            </div>
          </div>
        </div>
      </Section>
      {/* Sobre o projeto */}
      <Section
        title="O que é a GreenLink?"
        subtitle="Um sistema open source para gerir vendas de vegetais — pensado para produtores, mercearias e pequenos distribuidores."
      >
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className={styles.card}>
              <p>
                A GreenLink ajuda a centralizar <b>produtos, stock, encomendas, clientes</b> e <b>relatórios</b>,
                reduzindo trabalho manual e erros no dia-a-dia.
              </p>
              <div className={styles.actions}>
                <Link className="button button--primary button--lg" to="/docs/intro">
                  Ler a Documentação
                </Link>
                <Link className="button button--secondary button--lg" to="/blog">
                  Ver Atualizações
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Funcionalidades */}
      <Section title="Funcionalidades principais" subtitle="O essencial para vender e gerir o negócio, sem complicações.">
        <div className="row">
          {Capabilities.map((c, idx) => (
            <div key={idx} className="col col--4">
              <div className={styles.card}>
                <Heading as="h3">{c.title}</Heading>
                <p>{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Como funciona */}
      <Section title="Como funciona" subtitle="Um fluxo simples do campo até à entrega.">
        <div className="row">
          {HowItWorks.map((s) => (
            <div key={s.step} className="col col--4">
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>{s.step}</div>
                <Heading as="h3">{s.title}</Heading>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      

    </>
  );
}
