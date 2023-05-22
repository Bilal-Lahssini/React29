import useNetwork from '@/data/network';
import { useRouter } from 'next/router';
import styles from '@/styles/secondPage.module.css';
import VeloFoto from '@/components/VeloFoto'


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

      <VeloFoto station={station}/>
      
      <div className={styles.textdecor}>
        <h1>Prijs :</h1>
        <h2>Aantal minuten</h2>
        <p>Aantal vrije fietsen {station.free_bikes}</p>
        <p>Aantal vrije plaatsen {station.empty_slots}</p>
      </div>

      
      
    </div>
  )
}
