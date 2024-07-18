const NavBar = () => {
  return (
    <div className="bg-blue-950 text-white w-full h-12 flex items-center justify-end pr-10 sticky top-0 z-10">
        <a href="#estadisticas_id" className="px-6 text-base">Estadisticas</a>
        <a href="#grafica_id" className="px-6 text-base">Ganancias</a>
        <a href="#tabla_id" className="px-6 text-base">Vehiculos</a>
    </div>
  );
}

export default NavBar;
