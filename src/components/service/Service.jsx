import './Service.css'
import imageOne from '../../images/image(1).png'
import imageTwo from '../../images/image(2).png'
import imageThree from '../../images/image(3).png'

function Service() {
  return (
    <section className='service' id='service'>
        <div className="service-head">
            <h2>BIZNING XIZMATLARIMIZ</h2>
            <p>Qulaylik uchun biz xizmatlarimizni barcha yo'nalishlar bo'yicha paketlarga ajratdik, ammo sizda o'zingizning shaxsiy variantingizni yig'ish imkoniyati ham mavjud.</p>
            <a href='https://t.me/Tilav_uz' className='btn'>Detail <i className="bi bi-arrow-right"></i></a>
        </div>
        <div className="service-card">
            <div className="service-card__two">
              <div className="service-image">
                <img src={imageOne} alt="image" />
                <p>SMM</p>
              </div>
              <div className='service-image'>
                <img src={imageTwo} alt="image" />
                <p>UI UX DIZAYN</p>
              </div>
            </div>
            <div className="service-image">
                <img src={imageThree} alt="image" />
                <p>WEBSITE</p>
            </div>
        </div>
    </section>
  )
}

export default Service