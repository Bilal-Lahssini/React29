import useNetwork from '@/data/network';
import { useRouter } from 'next/router';
import styles from '@/styles/secondPage.module.css';
import VeloFoto from '@/components/VeloFoto'
import React from 'react';
import DetailsButton from '@/components/Button';


export default function Home() {
  const { network, isLoading, isError } = useNetwork()
  const router = useRouter()
 
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>

  const station = network.stations.find(station => station.id === router.query.stationId)

  return (
  
    <div>

      <div className={styles.page2}>
        <h1>{station.name}</h1>
      </div>

    <div className={styles.image}>
      <VeloFoto station={station}/>
    </div>

    <div className={styles.details}>
      <h1>Welkom in Antwerpen</h1>

      <div className={styles.button}><DetailsButton /></div>

    </div>

      
      
      <div className={styles.textdecor}>


      
        <h1>Dagpas: 5 euro</h1>
        <h1>Weekpas: 12 euro</h1>
        <h1>Jaarkaart: 58 euro</h1>

        <br />
        <p>Aantal vrije fietsen {station.free_bikes}</p>
        <p>Aantal vrije plaatsen {station.empty_slots}</p>
      </div>

      
      
    </div>
  )
}
