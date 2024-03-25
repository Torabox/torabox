import Home from '@/components/Home'
import About from '@/components/About'
// import Contact from '@/components/Contact'
// import Footer from '@/components/Footer'
import Projects from '@/components/Projects'
import Layout from '@/components/Layout'
import Services from '@/components/Services';


export default function HomePage() {
  return (
    <Layout>
      <Home />
      <About />
      <Services />
      <Projects />
    </Layout>
  );
}
