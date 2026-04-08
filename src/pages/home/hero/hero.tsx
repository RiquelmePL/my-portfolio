import { Container, Grid, Typography, Button, Box } from '@mui/material'
import { Download, ContactMail } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import avatar from '../../../assets/avatar.png'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = 'Eu sou um Desenvolvedor FullStack'
  
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 100)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{ 
      backgroundColor: '#0a0a0a', 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Fundo com grade tecnológica */}
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

      {/* Círculos pulsantes tecnológicos */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 188, 212, 0.1) 0%, transparent 70%)',
        animation: 'pulseCircle 4s ease-in-out infinite'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(25, 118, 210, 0.08) 0%, transparent 70%)',
        animation: 'pulseCircle 5s ease-in-out infinite reverse'
      }} />

      {/* Partículas flutuantes */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            background: `hsl(${Math.random() * 60 + 180}, 100%, 50%)`,
            borderRadius: '50%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s linear infinite`,
            opacity: 0.3 + Math.random() * 0.5,
            boxShadow: '0 0 5px currentColor'
          }}
        />
      ))}

      {/* Linhas de código animadas */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        fontFamily: 'monospace',
        fontSize: '12px',
        color: '#00bcd4',
        opacity: 0.5,
        animation: 'fadeCode 3s ease-in-out infinite'
      }}>
        {`<Developer>`}
      </div>
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        fontFamily: 'monospace',
        fontSize: '12px',
        color: '#4caf50',
        opacity: 0.5,
        animation: 'fadeCode 3s ease-in-out infinite reverse'
      }}>
        {`</FullStack>`}
      </div>

      <Container maxWidth="lg" style={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          {/* Bloco da Foto - 4 colunas */}
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
                    border: '2px solid rgba(0, 188, 212, 0.5)',
                    boxShadow: '0 0 40px rgba(0, 188, 212, 0.3)',
                    filter: 'brightness(0.95) contrast(1.05)'
                  }} 
                  src={avatar} 
                  alt="Avatar"
                />
                {/* Anel giratório ao redor da foto */}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '-10px',
                  right: '-10px',
                  bottom: '-10px',
                  borderRadius: '50%',
                  border: '2px solid transparent',
                  borderTopColor: '#00bcd4',
                  borderRightColor: '#1976d2',
                  animation: 'spin 3s linear infinite'
                }} />
              </div>
            </Box>
          </Grid>

        {/* Bloco do Texto e Botões - 8 colunas */}
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
                fontSize: '4rem',
                marginBottom: '16px',
                textShadow: '0 0 20px rgba(0, 188, 212, 0.3)'
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
                    fontSize: '2rem',
                    minHeight: '90px',
                    fontWeight: '500',
                    textShadow: '0 0 10px rgba(0, 188, 212, 0.5)'
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
            marginTop: '16px',
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
        
        @keyframes pulseCircle {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.6;
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
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
        
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
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