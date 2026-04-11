import { Container, Grid, Typography, Box } from '@mui/material'
import { 
  School, 
  EmojiEvents, 
  Language,
  Work
} from '@mui/icons-material'
import { useEffect, useState, useRef } from 'react'

const About = () => {
  const [visibleCards, setVisibleCards] = useState([false, false, false, false])
  const sectionRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          // Anima os cards um por um quando a seção entrar na tela
          const timeouts = [0, 1, 2, 3].map((index, delay) => {
            return setTimeout(() => {
              setVisibleCards(prev => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }, delay * 200)
          })
          setHasAnimated(true)
          return () => timeouts.forEach(timeout => clearTimeout(timeout))
        }
      },
      { threshold: 0.3 } // Quando 30% da seção estiver visível
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasAnimated])

  const cards = [
    {
      icon: <School sx={{ color: '#00bcd4', fontSize: 40 }} />,
      title: 'Formação',
      description: 'Ciência da Computação - UFS',
      delay: 0
    },
    {
      icon: <Work sx={{ color: '#4caf50', fontSize: 40 }} />,
      title: 'Experiência',
      description: '1+ ano como Dev FullStack',
      delay: 1
    },
    {
      icon: <EmojiEvents sx={{ color: '#ff9800', fontSize: 40 }} />,
      title: 'Projetos',
      description: 'Mapp Layers (Registrado)',
      delay: 2
    },
    {
      icon: <Language sx={{ color: '#e91e63', fontSize: 40 }} />,
      title: 'Idiomas',
      description: 'Português | Inglês Técnico',
      delay: 3
    }
  ]

  return (
    <section 
      ref={sectionRef}
      style={{ 
        backgroundColor: '#f5f5f5', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        position: 'relative',
        padding: '80px 0'
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={12}>
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontWeight: 'bold', 
              color: '#0d0d1d',
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              mb: 6
            }}
          >
            Quem sou eu?
          </Typography>
        </Box>

        {/* Texto Principal - Ocupa toda largura */}
        <Box textAlign="center" mb={8}>
          <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#444',
                lineHeight: 1.9,
                mb: 4,
                fontSize: '1rem',
                textAlign: 'center',
                letterSpacing: '0.3px'
              }}
            >
              Sou um Desenvolvedor Full Stack apaixonado por criar soluções tecnológicas que impactam positivamente a vida das pessoas. 
              Com experiência no desenvolvimento de interfaces responsivas e construção de APIs escaláveis, atuo desde a concepção 
              até a entrega de funcionalidades completas, sempre buscando entregar valor ao usuário final com código limpo e bem estruturado.
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#444',
                lineHeight: 1.9,
                mb: 4,
                fontSize: '1rem',
                textAlign: 'center',
                letterSpacing: '0.3px'
              }}
            >
              Minha jornada na tecnologia começou na Universidade Federal de Sergipe, onde me formei em Ciência da Computação. 
              Desde então, venho me dedicando a aprender e aplicar as melhores práticas de desenvolvimento, trabalhando com 
              tecnologias modernas como React, Node.js, TypeScript e bancos de dados relacionais. Estou sempre em busca de 
              novos desafios e oportunidades para crescer profissionalmente e contribuir com projetos inovadores.
            </Typography>
          </Box>
        </Box>

        {/* Cards de Informações - Abaixo do texto com animação */}
        <Grid container spacing={4} justifyContent="center">
          {cards.map((card, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Box sx={{ 
                p: 3,
                borderRadius: '16px',
                backgroundColor: 'white',
                textAlign: 'center',
                transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                opacity: visibleCards[index] ? 1 : 0,
                transform: visibleCards[index] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.8)',
                boxShadow: visibleCards[index] ? '0 4px 15px rgba(0, 0, 0, 0.1)' : 'none',
                cursor: 'pointer',
                '&:hover': {
                  transform: visibleCards[index] ? 'translateY(-10px) scale(1.05)' : 'translateY(50px) scale(0.8)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                }
              }}>
                <Box sx={{ 
                  mb: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  {card.icon}
                </Box>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: '#999', 
                    fontWeight: 600, 
                    letterSpacing: '1px', 
                    display: 'block', 
                    mb: 1,
                    textTransform: 'uppercase'
                  }}
                >
                  {card.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 600, 
                    color: '#0d0d1d',
                    lineHeight: 1.4
                  }}
                >
                  {card.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default About