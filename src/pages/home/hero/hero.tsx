import { Container, Grid, Typography, Button, Box } from '@mui/material'
import { Download, ContactMail } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import avatar from '../../../assets/avatar.png'

const Hero = () => {
  const [text, setText] = useState('')
  const [showParticles, setShowParticles] = useState(false)
  const fullText = 'Eu sou um Desenvolvedor FullStack'
  
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(interval)
        setShowParticles(true)
      }
    }, 100)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{ 
      backgroundColor: '#0d0d1d', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        animation: 'moveGrid 20s linear infinite'
      }} />

      {showParticles && [...Array(60)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background: `radial-gradient(circle, ${['#00bcd4', '#4caf50', '#2196f3', '#ff9800', '#e91e63'][Math.floor(Math.random() * 5)]}, transparent)`,
            borderRadius: '50%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 8}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0,
            boxShadow: `0 0 ${8 + Math.random() * 15}px ${['#00bcd4', '#4caf50', '#2196f3', '#ff9800', '#e91e63'][Math.floor(Math.random() * 5)]}`,
          }}
        />
      ))}

      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        fontFamily: 'monospace',
        fontSize: '12px',
        color: '#00bcd4',
        opacity: 0.5,
        animation: 'fadeCode 3s ease-in-out infinite'
      }}>
        {`</Developer>`}
      </div>

      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        fontFamily: 'monospace',
        fontSize: '12px',
        color: '#4caf50',
        opacity: 0.5,
        animation: 'fadeCode 3s ease-in-out infinite reverse'
      }}>
        {`<FullStack>`}
      </div>

      <Container maxWidth="lg" style={{ position: 'relative', zIndex: 1}}>
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, md: 4 }}>
            <Box style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px'
            }}>
              <div style={{
                position: 'relative',
                display: 'inline-block'
              }}>
                <img 
                  style={{ 
                    width: '100%', 
                    maxWidth: '380px',
                    minWidth: '310px',
                    height: 'auto',
                    borderRadius: '50%',
                    display: 'block',
                    border: '3px solid transparent',
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #00bcd4, #1976d2, #4caf50) border-box',
                    boxShadow: '0 0 40px rgba(0, 188, 212, 0.3)',
                    filter: 'brightness(0.95) contrast(1.05)',
                    animation: 'borderPulse 2s ease-in-out infinite'
                  }} 
                  src={avatar} 
                  alt="Avatar"
                />
              </div>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Box style={{
              padding: '20px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              textAlign: 'center'
            }}>
              <Box>
                <Typography 
                  variant="h2" 
                  component="h1" 
                  style={{ 
                    color: 'white', 
                    fontSize: '4.2rem',
                    fontWeight: '500',
                    marginBottom: '16px',
                    textShadow: '0 0 20px rgba(0, 188, 212, 0.3)',
                    fontFamily: '"Helvetica Neue"'
                  }}
                >
                  Riquelme Prado
                </Typography>
                
                <div style={{ position: 'relative' }}>
                  <Typography 
                    variant="h4" 
                    component="p" 
                    style={{ 
                      color: '#00bcd4', 
                      fontSize: '2.2rem',
                      minHeight: '90px',
                      fontWeight: '400',
                      textShadow: '0 0 10px rgba(0, 188, 212, 0.5)',
                      fontFamily: '"Helvetica Neue"'
                    }}
                  >
                    {text}
                    <span style={{
                      display: 'inline-block',
                      width: '3px',
                      height: '1.2em',
                      backgroundColor: '#00bcd4',
                      marginLeft: '4px',
                      animation: 'blink 1s step-end infinite',
                      boxShadow: '0 0 5px #00bcd4'
                    }} />
                  </Typography>
                </div>
              </Box>
              
              <Box style={{ 
                display: 'flex', 
                gap: '24px', 
                flexWrap: 'wrap',
                marginTop: '6px',
                justifyContent: 'center'
              }}>
                <Button 
                  variant="outlined" 
                  startIcon={<Download />}
                  size="large"
                  style={{ 
                    color: '#00bcd4',
                    borderColor: '#00bcd4',
                    borderWidth: '2px',
                    padding: '14px 36px',
                    fontSize: '1.1rem',
                    backgroundColor: 'transparent',
                    transition: 'all 0.3s ease',
                    textTransform: 'none',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 188, 212, 0.4)'
                    e.currentTarget.style.backgroundColor = 'rgba(0, 188, 212, 0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  Baixar Currículo
                </Button>
                
                <Button 
                  variant="outlined" 
                  startIcon={<ContactMail />}
                  size="large"
                  style={{ 
                    color: '#00bcd4',
                    borderColor: '#00bcd4',
                    borderWidth: '2px',
                    padding: '14px 36px',
                    fontSize: '1.1rem',
                    backgroundColor: 'transparent',
                    transition: 'all 0.3s ease',
                    textTransform: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 188, 212, 0.4)'
                    e.currentTarget.style.backgroundColor = 'rgba(0, 188, 212, 0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  Me Contactar
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <style>{`
        @keyframes moveGrid {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }
        
        @keyframes borderPulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 188, 212, 0.3);
            filter: brightness(0.95) contrast(1.05);
          }
          50% {
            box-shadow: 0 0 50px rgba(0, 188, 212, 0.6);
            filter: brightness(1) contrast(1.1);
          }
        }
        
        @keyframes fadeCode {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}

export default Hero