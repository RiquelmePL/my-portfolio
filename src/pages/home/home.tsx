import Hero from './hero/hero'
import About from './about/about'
import Projects from './projects/projects'
import Skills from './skills/skills'

const Home = () => {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="sobre">
        <About />
      </section>
      <section id="projetos">
        <Projects />
      </section>
      <section id="habilidades">
        <Skills />
      </section>
    </>
  )
}

export default Home