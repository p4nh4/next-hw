import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../../component/layout'
import { GetServerSideProps } from 'next'
import { BASE_PATH, BASE_URL,API_KEY } from '../../lib/constant'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function About()
{
    return(
        <Layout>
        <Head>
        <title>ABOUT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
            <main className={`${styles.main} ${inter.className}`}>
               
            </main>
        </Layout>
    )
}