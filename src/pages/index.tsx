import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Typography } from '@mui/material'

import SideMenu from "../components/SideMenu/SideMenu.js";



import Link from 'next/link';

import AppBar from "../components/AppBar/AppBar";


const inter = Inter({ subsets: ['latin'] })

const label = { inputProps: { "aria-label": "Switch demo" } };





export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        { /*** 
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        />
        **/ }

        <SideMenu />

        <Button sx={{ marginBottom: 2 }} variant="contained">
          Button
        </Button>
      </main>
    </>
  );
}


/* Old test shit
   <div>
            <span>With default Theme:</span>
          </div>
          <Switch {...label} defaultChecked />
          <Switch {...label} />
          <Switch {...label} disabled defaultChecked />

          <Box
            className={styles.box}
            sx={{
              backgroundColor: "primary.dark",
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />

 */