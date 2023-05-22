
import styles from '@/styles/Home.module.css';
import {useState, useEffect} from 'react';
import useNetwork from '@/data/network';
import {getDistance} from '@/utils/getDistance';
import Link from 'next/link';


export default function Home() {

  const [location, setLocation] = useState({});
  const { network, isLoading, isError } = useNetwork();

  // use effect gebruiken om bv iets op te roepen enkel bij opstart van de app
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>

  const stations = network.stations;
  

  return (
    <div className={styles.container}>
      <div className={styles.square}>
        
        {stations.slice(0,9).map(station => (
          <Link href={`/stations/${station.id}`} key={station.id}>
            {station.name}  <br /> <br />{Math.round(getDistance(location.latitude, location.longitude, station.latitude, station.longitude).distance/1000,2)} km
          </Link>
        ))}

          
      </div>

      <div className={styles.footer}>

          <h3>Gemaakt door Bilal Lahssini</h3>
          
          <br/>

          <div className={styles.imageContainer}>

          <a href='https://www.linkedin.com/in/bilal-lahssini-a17a31235/'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="" /></a>
          <a href='https://www.instagram.com/bilal.zkl/'><img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="" /></a>
          <a href='https://www.facebook.com/'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png" alt="" /></a>
      </div>

      </div>
    </div>
    
  )}