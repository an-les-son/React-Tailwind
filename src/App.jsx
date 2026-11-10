import DataImage from './data'
import { listTools, listProyek } from './data'

function App() {
  return (
    <>
      {/* Hero */}
      <div className="hero grid md:grid-cols-2 pt-10 grid-cols-1 gap-10">
        <div className='animate__animated animate__fadeInUp animate__delay-3s'>
          <div className='flex items-center gap-4 mb-4 bg-zinc-800 p-4 rounded-2xl w-fit'>
            <img src={DataImage.HeroImage} alt="Hero Image" className='w-10 rounded-md'/>
            <q>Lorem ipsum dolor sit amet, consectetur adipisicing elit.😁</q>
          </div>
          <h1 className='text-5xl/tight font-semibold mb-6'>Hi, saya Anjar</h1>
          <p className='text-base opacity-50 text-justify mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, blanditiis odio! Consectetur soluta deserunt neque sunt labore, eligendi possimus dolor doloribus repellat autem repellendus a hic aliquid, accusamus consequatur magni perferendis quisquam, dolores in nostrum iusto corrupti. Autem rerum odit similique debitis. Neque pariatur commodi facilis! A, soluta. Totam dicta molestiae laudantium veniam non quasi sit quia porro incidunt ut, ea quis, omnis accusamus velit necessitatibus quidem consequatur? Repudiandae iure facere aperiam modi. Similique quae temporibus tempore obcaecati enim vitae molestiae eaque cum sint ducimus odio voluptates adipisci tempora minima unde impedit possimus ipsa alias accusamus porro vero, architecto nobis.</p>
          <div className='flex items-center gap-4'>
            <a href="#" className='bg-violet-700 p-4 rounded-2xl hover:bg-violet-600'>Download CV <i className="ri-download-line ri-lg"></i></a>
            <a href="#project" className='bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600'>Lihat Projects <i className="ri-eye-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className='w-125 m-auto'/>
      </div>
      {/* Tentang */}
      <div className='tentang mt-32 py-10' id='tentang'>
      <div className='mx-auto p-7 bg-zinc-800 rounded-lg' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <img src={DataImage.HeroImage} alt="Image" className='w-24 sm:hidden rounded-[50%] mb-10'/>
        <p className='text-base text-justify mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti mollitia ipsum odio quaerat aut rem molestiae. Vel expedita ratione, fugiat porro et libero fuga velit deserunt eligendi laudantium excepturi accusantium. Minima odit ab quasi facilis repudiandae iure atque sit vitae! Repellendus consequuntur sequi perferendis totam rerum sint commodi voluptas odit fugiat, vel nesciunt quas exercitationem, consequatur excepturi fugit aliquam, enim doloribus officiis.</p>
        <div className='flex items-center justify-between'>
          <img src={DataImage.HeroImage} alt="Image" className='w-24 hidden sm:block rounded-[50%]'/>
          <div className='flex items-center gap-10'>
            <div className='flex flex-col items-center'>
              <h1 className='text-4xl mb-2'>
                45<span className='text-violet-500'>+</span>
              </h1 >
              <p>Project Selesai</p>
            </div>
            <div className='flex flex-col items-center'>
              <h1 className='text-4xl mb-2'>
                4<span className='text-violet-500'>+</span>
              </h1>
              <p>Tahun Pelangaman</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* Tools */}
      <div className='tools mt-32'>
        <h1 className='text-4xl font-bold mb-4' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang digunakan</h1>
        <p className='text-base opacity-50' data-aos="fade-up" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa tools yang biasa saya gunakan dalam proses desain dan membangun website.</p>
        <div className='tools-box mt-7 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
          {listTools.map(tool => (
            <div className='flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group' key={tool.id} data-aos="fade-up" data-aos-delay={tool.dad} data-aos-once="true">
            <img src={tool.gambar} alt="Tool Image" className='w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900'/>
            <div>
              <h4 className='font-bold'>{tool.nama}</h4>
              <p className='opacity-50'>{tool.ket}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
      {/* Projects */}
      <div className='project mt-32 py-10' id='project'>
        <h1 className='text-center text-4xl font-bold mb-4' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Projects</h1>
        <p className='text-center text-base opacity-50' data-aos="fade-up" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa projects yang telah saya kerjakan.</p>
        <div className='project-box mt-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
          {listProyek.map(project => (
            <div key={project.id} className='bg-zinc-800 p-4 rounded-lg' data-aos="fade-up" data-aos-delay={project.dad} data-aos-once="true">
              <img src={project.gambar} alt="Project Image"/>
              <h1 className='text-2xl font-bold mt-4'>{project.nama}</h1>
              <p className='text-base opacity-50'>{project.desk}</p>
              <div className='flex flex-wrap gap-1 mt-4'>
                {project.tools.map((tool, index) => (
                  <p key={index} className='py-1 px-1 border border-zinc-700 bg-zinc-600 rounded-md font-semibold'>{tool}</p>
                ))}
              </div>
              <div className='mt-7 text-center'>
                <a href="#" className='bg-violet-800 block text-white p-2 rounded-md hover:bg-violet-600'>Lihat Website</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Kontak */}
      <div className='kontak mt-32 py-10' id='kontak'>
        <h1 className='text-3xl font-bold text-center' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
        <p className='text-base text-center opacity-50' data-aos="fade-up" data-aos-delay="300" data-aos-once="true">Konsultasi dalam pembangunan Website</p>
        <form action="https://formspree.io/f/mwllzgqa" method="POST" className='bg-zinc-800 py-4 px-10 rounded-md mx-auto mt-4 w-full sm:w-fit' autoComplete='off' data-aos="fade-up" data-aos-delay="500" data-aos-once="true">
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col items-center sm:items-start'>
              <label>Nama Lengkap</label>
              <input type="text" name='nama' placeholder='Masukan Nama' required className='border border-zinc-400 rounded-md px-3 w-full'/>
            </div>
            <div className='flex flex-col items-center sm:items-start'>
              <label>Email</label>
              <input type="email" id='email' name='email' placeholder='Masukan Email' required className='border border-zinc-400 rounded-md px-3 w-full'/>
            </div>
            <div className='flex flex-col items-center sm:items-start'>
              <label htmlFor='pesan'>Pesan</label>
              <textarea name="pesan" id="pesan" cols="30" rows="8" placeholder='Masukan Pesan' className='border border-zinc-400 rounded-md px-3 w-full'></textarea>
            </div>
            <div>
              <button className='bg-violet-700 text-white font-bold hover:bg-violet-500 py-2 w-full rounded-md cursor-pointer'>Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
