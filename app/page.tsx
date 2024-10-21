import "./wannn-style.css";
import RiwayatPendidikan from './components/riwayatPendidikan'; 
import Hero from "./components/hero";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import WarnaFavorit from "./components/WarnaFavorit";
import ContactForm from "./components/ContactForm";




export default function CVonline() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <WarnaFavorit />
      <ContactForm />
    </section>
  )
}