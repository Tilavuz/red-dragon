import { useState } from 'react'
import './Footer.css'

function Footer() {

  const [loader, setLoader] = useState(false)
  const [email, setEmail] = useState('')

  const sendEmail = `Email: ${email}`


  async function sendMessage(e) {
    e.preventDefault()
    console.log(loader);
    setLoader(true)
    await fetch(`https://api.telegram.org/bot6358345393:AAGm2eRzhefHU7vWgZswC0La8XaISprGVJs/sendMessage?chat_id=5281539071&text=${sendEmail}`)
    setLoader(false)

    setEmail('')
  }


  return (
    <footer className='footer'>
      <form onSubmit={sendMessage}>
        <label htmlFor="email">
          Shaxsiy Emailingizni yuboring. Biz siz bilan bog'lanamiz 
        </label>
        <input type="text" id='email' placeholder='Email address' required onChange={(e)=> setEmail(e.target.value)} value={email}/>
        <button className='btn'>{!loader ? 'Submit' : <div class="lds-hourglass"></div>}</button>
      </form>
      <div className="footer-bottom">
        <p>Red Dragon IT group - 2023</p>
      </div>
    </footer>
  )
}

export default Footer