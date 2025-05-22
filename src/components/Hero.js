import HeroImg from '../assets/hero.png.webp';
import { AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai";

export default function Hero(){
    const config = {
        subtitle:'im a web developer',
    }

    return <section className='flex flex-col md:flex-row ps-4 py-20 bg-secondary justify-center' id='home'>
        <div className='w-1/4 flex flex-col ps-6 mt-4'> <div></div>
        <h1 className=' text-white text-6xl  font-hero-font pb-5'>WELCOME<br />
        <span className='text-green-600'>IM <br /></span>  <span className=''>SENTHAMIL</span> <span className='text-green-600'>SELVAN</span> <br />
        <p className='text-2xl mt-2 flex-row'>IM Web<span className='text-green-600'>Devloper.</span></p>
        </h1>

        <div className='flex py-10 gap-4 text-white px-10'>
            <a href="https://github.com/Senthamil07"  className='hover:text-green-500'><AiOutlineGithub  size={40}/></a>
            <a href="https://www.linkedin.com/in/senthamil-selvan-s-31531230b/"  className='hover:text-green-500'><AiOutlineLinkedin size={40}/></a>
        </div>

        </div>
        <img className=' md:w-1/3' src={HeroImg} alt="hero" />


    </section>
}