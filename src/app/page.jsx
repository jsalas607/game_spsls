import Footer from "@/src/componen/footer/Footer.jsx";
import FormUser from "@/src/componen/form_user/FormUser";
import Title from "@/src/componen/title/Title";
import styles from "@/src/app/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Title />
      <FormUser />
      <div className={styles.weaponsSection}>
        <p className={`nes-text is-disabled ${styles.weaponsLabel}`}>tus armas</p>
        <Footer />
      </div>
    </main>
  );
}
