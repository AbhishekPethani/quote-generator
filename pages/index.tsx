import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

// Components
import { BackgroundImageBottomRight, BackgroundImageTopLeft, GradientBackgroundCon } from '@/components/QuoteGenerator/QuoteGeneratorElements'

// Assets
import Cloud_Thunder from '@/assets/cloud_thunder.png';
import Cloudy_Weather from '@/assets/cloudy_weather.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Quote Generator</title>
        <meta name="description" content="Learning Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GradientBackgroundCon>
        <BackgroundImageTopLeft 
         src = {Cloud_Thunder}
         height = "200"
         alt=""/>
        <BackgroundImageBottomRight 
         src = {Cloudy_Weather}
         height = "200"
         alt=""/>
      </GradientBackgroundCon>
    </>
  )
}
