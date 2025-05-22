
import ResumeImg from '../assets/resume2.png';
import resume from '../components/Senthamil selvan cv1.pdf';

export default function Resume() { 

   


    return <section id='resume' className='flex flex-col md:flex-row bg-About px-5'>

        <div className='md:w-1/2 mt-6 px-5 py-5'>
            <img className='h-[450px] flex justify-center'  src={ResumeImg}/>
        </div>

        <div className='py-5 md:w-1/2 flex justify-center text-white'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-white border-b-4 border-[#31e676] mb-5 w-[140px] font-bold'> <span  className='text-green-500'>Re</span>sume</h1>
            <p className='pb-5 font-bold'>You Can View My Resume <a className='btn' href={resume} download="resume">DOWNLOAD</a> </p>
           
        </div>
            
        </div>
    </section>
}
