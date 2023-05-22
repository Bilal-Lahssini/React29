import useImage from '@/data/image';
import styles from '@/styles/Home.module.css'


export default function StationImage(props) {
  const { image, isLoading, isError } = useImage(props.station)
 
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  if (!image) return <div>No image</div>

  return (
    <img className={styles.rarefoto} src={image} width="100" height="100" alt={props.station.name}/>
  )
}