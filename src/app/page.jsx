import Footer from "@/src/componen/footer/Footer.jsx";
import FormUser from "@/src/componen/form_user/FormUser";
import Title from "@/src/componen/title/Title";


/* import { Press_Start_2P } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const press = Press_Start_2P({ subsets: ['latin'],weights: ["400"],
styles: ["normal"], }) */

export default function Home() {


  return (
<>

    <Title/>
    <FormUser />
    <Footer/>
</>
);
}
