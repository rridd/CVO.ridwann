import foto from "../poto.jpeg";

export default function Hero() {
    return (
        <div className="text-center">
            <h1 className="text-gray-300 font-bold">CV Online</h1>
            <h2 className="text-3x1">Muhammad Ridwan</h2>
            <Profile />
            <p>
            Saya adalah seorang mahasiswa ma'soem univesity, yang tinggal di cianjur.
            </p>
        </div>
    );
}

function Profile(){
    return <img src={foto.src} alt="Muhammad Ridwan" className="fotoku"/>;
  }