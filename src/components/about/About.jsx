import  './About.css'
import datas from '../../datas/about-data'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-scroll'


function About() {



  return (
    <section className='about' id='about'>
        <div className="about-head">
          <h2>BIZNING JAMOA <br /> A'ZOLARI</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quisquam odio iusto. Possimus, est. Omnis unde, amet minima ducimus perferendis error nemo accusamus voluptate, possimus vitae eius, tenetur odio reiciendis.</p>
          <div className="about-btns">
            <Link to="blog" className='btn'> Our Blog <i className="bi bi-arrow-right"></i></Link>
          </div>
        </div>
        <Carousel className="about-slider">
          {datas.map(data => (
            <div key={data.id} className="card">
              <img src={data.image} alt="man" />
              <p>{data.disc}</p>
              <span>{data.tel}</span>
            </div>
          ))}
        </Carousel>
    </section>
  )
}

export default About