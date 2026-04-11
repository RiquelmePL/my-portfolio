import { Container, Grid, Typography, Box, Card, CardContent, Chip } from '@mui/material'
import { 
  Code, 
  Storage, 
  DesignServices, 
  Build,
  Cloud,
  Security
} from '@mui/icons-material'
import { useEffect, useRef, useState } from 'react'

const Skills = () => {
  const [visibleCards, setVisibleCards] = useState([false, false, false, false, false, false])
  const sectionRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          const timeouts = [0, 1, 2, 3, 4, 5].map((index, delay) => {
            return setTimeout(() => {
              setVisibleCards(prev => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }, delay * 150)
          })
          setHasAnimated(true)
          return () => timeouts.forEach(timeout => clearTimeout(timeout))
        }
      },
      { threshold: 0.2 }
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

  const skills = [
    {
      category: "Frontend",
      icon: <DesignServices sx={{ fontSize: 32 }} />,
      iconColor: '#00bcd4',
      items: ["React", "React Native", "Next.js", "TypeScript", "HTML/CSS"]
    },
    {
      category: "Backend",
      icon: <Code sx={{ fontSize: 32 }} />,
      iconColor: '#4caf50',
      items: ["NestJS", "Node.js", "Python", "FastAPI", "Express"]
    },
    {
      category: "Banco de Dados",
      icon: <Storage sx={{ fontSize: 32 }} />,
      iconColor: '#ff9800',
      items: ["PostgreSQL", "MySQL", "MongoDB", "SQL"]
    },
    {
      category: "Ferramentas",
      icon: <Build sx={{ fontSize: 32 }} />,
      iconColor: '#e91e63',
      items: ["Git/GitHub", "Docker", "Power BI", "Metodologias Ágeis"]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud sx={{ fontSize: 32 }} />,
      iconColor: '#2196f3',
      items: ["AWS (Conceitos)", "CI/CD", "API RESTful"]
    },
    {
      category: "Soft Skills",
      icon: <Security sx={{ fontSize: 32 }} />,
      iconColor: '#9c27b0',
      items: ["Liderança", "Comunicação", "Trabalho em Equipe", "Resolução de Problemas"]
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
        <Box textAlign="center" mb={8}>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 'bold', 
              color: '#0d0d1d',
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 2
            }}
          >
            Habilidades Técnicas
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#666', 
              maxWidth: '700px', 
              mx: 'auto',
              fontSize: { xs: '0.9rem', md: '1rem' },
              fontWeight: 400,
              mb: 2
            }}
          >
            Tecnologias e ferramentas que utilizo no meu dia a dia
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {skills.map((skillCategory, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Box sx={{ 
                opacity: visibleCards[index] ? 1 : 0,
                transform: visibleCards[index] ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`,
                height: '100%'
              }}>
                <Card 
                  sx={{ 
                    height: '100%',
                    minHeight: '240px',
                    borderRadius: '16px',
                    backgroundColor: 'white',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 8px 25px rgba(0, 0, 0, 0.1)`,
                      borderColor: skillCategory.iconColor
                    }
                  }}
                >
                  <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                      <Box sx={{ 
                        color: skillCategory.iconColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: `${skillCategory.iconColor}15`,
                        borderRadius: '10px',
                        p: 0.8
                      }}>
                        {skillCategory.icon}
                      </Box>
                      <Typography 
                        variant="h6" 
                        component="h3" 
                        fontWeight="bold" 
                        sx={{ color: '#0d0d1d', fontSize: '1.1rem' }}
                      >
                        {skillCategory.category}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, flex: 1 }}>
                      {skillCategory.items.map((skill, idx) => (
                        <Chip
                          key={idx}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: '#f0f0f0',
                            color: '#333',
                            fontWeight: 500,
                            fontSize: '0.75rem',
                            height: '28px',
                            borderRadius: '8px',
                            '&:hover': {
                              backgroundColor: skillCategory.iconColor,
                              color: 'white',
                              transform: 'translateY(-2px)',
                              transition: 'all 0.3s ease'
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default Skills