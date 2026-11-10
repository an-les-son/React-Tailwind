
function footer() {
  return (
    <div className="mt-32 flex flex-col sm:flex-row items-center justify-between p-10">
        <h1 className="text-2xl font-bold mb-10 sm:mb-0">Portofolio</h1>
        <div className="flex items-center gap-4 text-base">
          <a href="#beranda">Beranda</a>
          <a href="#tentang">Tentang</a>
          <a href="#project">Project</a>
        </div>
        <div className="flex items-center gap-1">
          <a href="#">
            <i className="ri-github-fill ri-2x"></i>
          </a>
          <a href="#">
            <i className="ri-instagram-fill ri-2x"></i>
          </a>
          <a href="#">
            <i className="ri-reddit-fill ri-2x"></i>
          </a>
          <a href="#">
            <i className="ri-youtube-fill ri-2x"></i>
          </a>
        </div>
    </div>
  )
}

export default footer