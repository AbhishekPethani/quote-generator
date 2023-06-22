import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

// Components
import { BackgroundImageBottomRight, BackgroundImageTopLeft, Footer, FooterLink, GenerateQuoteButton, GenerateQuoteButtonText, GradientBackgroundContainer, QuoteGeneratorContainer, QuoteGeneratorInnerContainer, QuoteGeneratorSubTitle, QuoteGeneratorTitle } from '@/components/QuoteGenerator/QuoteGeneratorElements'

// Assets
import Cloud_Thunder from '@/assets/cloud_thunder.png';
import Cloudy_Weather from '@/assets/cloudy_weather.png';

const Home = () => {
  const [totalGeneratedQuotes, setTotalGeneratedQuotes] = useState<Number | null>(0); 
  
  
  return (
    <>
      <Head>
        <title>Quote Generator</title>
        <meta name="description" content="Learning Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GradientBackgroundContainer>
        
        {/* Background images */}
        <BackgroundImageTopLeft 
         src = {Cloud_Thunder}
         height = "200"
         alt=""/>
        
        <BackgroundImageBottomRight 
         src = {Cloudy_Weather}
         height = "200"
         alt=""/>

        {/* Quote Generator modal */}
        <QuoteGeneratorContainer>
          <QuoteGeneratorInnerContainer>
            <QuoteGeneratorTitle>
              Daily Inspirational Quote Generator
            </QuoteGeneratorTitle>
            <QuoteGeneratorSubTitle>
              Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by <FooterLink href="https://zenquotes.io/" target="_blank" rel="noopener noreferrer"> ZenQuotes API</FooterLink>.
            </QuoteGeneratorSubTitle>

            <GenerateQuoteButton>
              <GenerateQuoteButtonText onClick={null} >
                Make a quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerContainer>
        </QuoteGeneratorContainer>

        {/* Footer */}
         <Footer>
          <>
            Quotes Generated: {totalGeneratedQuotes}
            <br />
            Developed with 💖 by <FooterLink 
              href="https://www.linkedin.com/in/abhishek-pethani-356603119/"
              target="_blank"
              rel="noopener noreferrer"> @Abhishek Pethani</FooterLink>
          </>
         </Footer>
      </GradientBackgroundContainer>
    </>
  )
}

export default Home;