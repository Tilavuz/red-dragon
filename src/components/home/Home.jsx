import { Link } from "react-scroll";
import "./Home.css";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-head">
        <h1>BIZNESDAN ORTMAY RIVOJLANISHNI BIZGA TOPSHIRING</h1>
        <p>Biz SMM-ni ilgari surishva samarali saytlarni rivojlantirishsohasida kompleks yondashuvni taklif qilamiz.</p>
        <div className="home-btns">
            <Link className="btn" to="service">Our Services <i className="bi bi-arrow-right"></i></Link>
            <Link className="btn" to="contact">Contact</Link>
        </div>
        <div className="home-network">
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-youtube"></i></a>
        </div>
      </div>
      <YMaps>
        <div className="home-location">
          <Map defaultState={{ center: [38.841605, 65.789979], zoom: 13 }}  width={600} height={600}>
            <Placemark geometry={[38.841605, 65.789979]}/>
          </Map>
        </div>
      </YMaps>
    </section>
  );
}

export default Home;
