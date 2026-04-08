import Hero from './hero/hero'
import About from './about/about'
import Projects from './projects/projects'

const Home = () => {
  return (
    <>
      <section id="sobre">
        <Hero />
      </section>
      <section id="habilidades">
        <About />
      </section>
      <section id="projetos">
        <Projects />
      </section>
    </>
  )
}

export default Home