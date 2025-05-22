import AboutImg from '../assets/about1.png';

export default function About() { 
    const config = {   
        line1: 'Im Senthamil Selvan, a dedicated web developer passionate about crafting intuitive and visually appealing web experiences',
        line2: 'My core skills include HTML, CSS, and JavaScript, alongside modern frameworks like React.js, Tailwind CSS, and Bootstrap for responsive and dynamic front-ends',
        line3: 'I also have practical experience with MySQL to ensure robust data management and seamless back-end integration for full-stack solutions',
     }
    return <section className='flex flex-col md:flex-row bg-About px-5' id='about'>

        <div className='md:w-1/2 mt-6 ]'>
            <img className='h-[450px]'  src={AboutImg}/>
        </div>

        <div className='py-5 md:w-1/2 flex justify-center text-white'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-white border-b-4 border-[#31e676] mb-5 w-[170px] font-bold'>About <span className='text-green-600'>Me</span></h1>
            <p className='pb-5'>{config.line1}I'm Senthamil Selvan, a dedicated web developer passionate about crafting intuitive and visually appealing web experiences.</p>
            <p className='pb-5'>{config.line1}My core skills include HTML, CSS, and JavaScript, alongside modern frameworks like React.js, Tailwind CSS, and Bootstrap for responsive and dynamic front-ends.</p>
            <p className='pb-5'>{config.line1}I also have practical experience with MySQL to ensure robust data management and seamless back-end integration for full-stack solutions.</p>
        </div>
            
        </div>
    </section>
}
