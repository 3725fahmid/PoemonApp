import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/Logo.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styles from '../styles/Home.module.css'
import  graphQLClient  from '../graphQL/graphQLClient'
import { Pokemonquery } from '../graphQL/queries'
import ArticalContent from '../components/content'





export const getStaticProps: GetStaticProps = async () => {




const data = await graphQLClient.request(Pokemonquery);


  return {
    props: { data }
  };
}

const Home: NextPage = ({data}: any ) => {
  // console.log(data);
  // console.log(data.types.results);
  const pokemonType = data.pokemons.results; 
  // console.log(pokemonType);

  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Pokemon App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        <Image
        src={logo}
        alt="Logo"
        />
        </h1>

        <div className={styles.grid}>
          {pokemonType.map((poki: any) => (
          <a key={pokemonType.id} href="#" className={styles.card}>
            <Card sx={{ Width: 250 }}>
            <CardMedia
            className={styles.Pokemonimage}
              sx={{ height: 250 ,width:250,borderRadius: 2}}
              image={poki.dreamworld}
              title={poki.name}
            />
            </Card>
            <CardContent className={styles.PokemonName}>
              <h2>{poki.name}</h2>
              <span>gress</span>
              <span>poson</span>
            </CardContent>
          </a>
          ))}
        </div>
      </main>
    </div>
    <div>
      <ArticalContent />
    </div>
    </>
  )
}

export default Home