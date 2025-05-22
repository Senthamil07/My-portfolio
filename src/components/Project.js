import websiteImg from '../assets/ecom-wedsite.jpg';
import websiteImg2 from '../assets/agecal.png';
import websiteImg3 from '../assets/react.webp';

export default function Project() {
        
    





         return <section className="flex flex-col py-20 px-5 justify-center bg-secondary text-white" id="project"> 
            <div className="w-1/2">
            <div className='flex px-10'>
            <h1 className='text-4xl text-white border-b-4 border-[#31e676] mb-5 w-[170px] font-bold'> <span className='text-green-600'>PRO</span>JECTS</h1>
            <p></p>
            </div>
               
            </div>

            <div className="w-full mt-5"> 
               <div className='flex flex-col md:flex-row px-20 gap-10 justify-center'>
                 {/* img1 */}
                <div className='relative'>
                     <img className='h-[200px] w-[450px]' src={websiteImg} alt="" /> 

                     <div className='mt-4 flex justify-center rounded'>
                        <a href="https://github.com/Senthamil07/html-css-UI-project-shopkart-" className='btn1'>View Project</a>
                        </div>

                     <div className='absolute left-0 right-0 bottom-[22px] top-[0] bg-project w-full h-[200px] opacity-0 hover:opacity-100 transition-all duration-500'>
                        <p className='text-center py-5 px-5 font-bold'> A Ecommerce Website . Buid With Only Using HTML&CSS</p>
                     </div>
                </div>

                {/* img2 */}
                <div className='relative'>
                     <img  className='h-[200px] w-[450px]' src={websiteImg2} alt="" />

                           <div className='mt-4 flex justify-center rounded'>
                        <a href="https://github.com/Senthamil07/javascript-agecalculator" className='btn1'>View Project</a>
                        </div>


                     <div className='absolute left-0 right-0 bottom-[22px] top-[0] bg-project w-full h-[200px] opacity-0 hover:opacity-100 transition-all duration-500'>
                         <p className='text-center py-5 px-5  font-bold'>Age Calculator Build . With HTML,CSS And JAVASCRIPT</p>
                         </div>
                </div>
                {/* img3 */}
                <div className='relative'>
                    <img   className='h-[200px] w-[450px]' src={websiteImg3} alt="" />

                    <div className='mt-4 flex justify-center rounded'>
                        <a href="https://github.com/Senthamil07/My-WebSite?tab=readme-ov-file#readme" className='btn1'>View Project</a>
                        </div>

                    <div className='absolute left-0 right-0 bottom-[22px] top-[0] bg-project w-full h-[200px] opacity-0 hover:opacity-100 transition-all duration-500'>
                    <p className='text-center py-5 px-5  font-bold'>Persnal Website Build . With React,JavaScript& <br /> Tailwindcss</p>
                    </div>
                </div>
               </div>
           </div>
         </section>
}