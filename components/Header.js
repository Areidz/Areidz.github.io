function Header() {
  return (
    <header className="container flex text-center mx-auto py-10">
      <div className="md:w-4/6 mx-auto">
        <img src="/profile-pic.jpg" alt="Profile Picture" className="h-24 rounded-full mx-auto mb-5" />
        <h1 className="font-bold">Rodrigo 'Rigle' Iglesias</h1>
        <p>Profesor de formación profesional, podcaster y creador de contenido en YouTube.</p>
      </div>
    </header>
  );
}

export default Header;
