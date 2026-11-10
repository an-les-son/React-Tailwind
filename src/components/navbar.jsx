import { useState, useEffect } from "react"

const Navbar = () => {
  const [active, setActive] = useState(false)
  
  useEffect(()=> {
    const handleScroll = () => {
      if (window.scrollY > 150) {
          setActive(true)
        }else{
          setActive(false)
        }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  },[])

  return (
    <div className="navbar py-7 flex items-center justify-between">
    <div className="logo">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">Portofolio</h1>
    </div>
    <ul className={`menu flex  items-center sm:gap-10 gap-4 fixed md:static z-50 left-1/2 -translate-x-1/2 md:translate-x-0 md:opacity-100 bg-white/30 py-4 px-10 backdrop-blur-md rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none ${active ? "top-0 opacity-100":"-top-10 opacity-0"}`}>
        <li><a href="#beranda" className="sm:text-lg text-base font-medium">Beranda</a></li>
        <li><a href="#tentang" className="sm:text-lg text-base font-medium">Tentang</a></li>
        <li><a href="#project" className="sm:text-lg text-base font-medium">Projects</a></li>
        <li><a href="#kontak" className="sm:text-lg text-base font-medium">Kontak</a></li>
    </ul>
    </div>
  )
}

export default Navbar