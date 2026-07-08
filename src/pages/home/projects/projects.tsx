import React, { useEffect, useRef, useState } from 'react'
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
  useTheme,
  Divider,
  Slide,
  Paper
} from '@mui/material'
import {
  GitHub,
  Launch,
  Map,
  ShoppingCart,
  Task,
  Api,
  DeliveryDining,
  Analytics,
  Close,
  ZoomIn,
  Code,
  ChevronLeft,
  ChevronRight,
  OpenInNew,
  Fullscreen,
  FullscreenExit,
  Image,
} from '@mui/icons-material'

interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
  previewImage: string;
  iconColor: string;
  bgGradient: string;
  techStack: string[];
  githubLink: string | null;
  demoLink: string | null;
  images: string[];
}

const FullScreenTransition = React.forwardRef((props: any, ref: any) => {
  return <Slide direction="up" ref={ref} {...props} />
})

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([])
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageDialogOpen, setImageDialogOpen] = useState<boolean>(false)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)
  const [hasAnimated, setHasAnimated] = useState<boolean>(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const projects: Project[] = [
    {
      id: 1,
      title: "Mapp Layers (Software Registrado)",
      description: "Plataforma inovadora para gerenciamento e visualização de dados geoespaciais. Projeto registrado!",
      icon: <Map sx={{ fontSize: 32 }} />,
      previewImage: "mapplayers/previewmapplayers.jfif",
      iconColor: '#00bcd4',
      bgGradient: 'linear-gradient(135deg, #00bcd4 0%, #0097a7 100%)',
      techStack: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      githubLink: null,
      demoLink: "https://mapplayers.site",
      images: [
        "mapplayers/previewmapplayers.jfif",
        "mapplayers/CamadaPerson.png",
        "mapplayers/Compartilhamento.png",
        "mapplayers/Compartilhamento1.png",
        "mapplayers/ExportMap.png"
      ]
    },
    {
      id: 2,
      title: "Sistema de Gestão de Academia",
      description: "Sistema completo para gerenciamento de academias, com controle de alunos, funcionários, treinos, aulas, planos, avaliações físicas e patrimônio.",
      icon: <ShoppingCart sx={{ fontSize: 32 }} />,
      previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      iconColor: '#4caf50',
      bgGradient: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
      techStack: ["React", "Python", "Flask", "PostgreSQL",],
      githubLink: "https://github.com/RiquelmePL/SistemaAcademia_Completo",
      demoLink: null,
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      title: "TaskFlow",
      description: "Aplicativo moderno de gerenciamento de tarefas com arrastar e soltar, categorização e colaboração em equipe.",
      icon: <Task sx={{ fontSize: 32 }} />,
      previewImage: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      iconColor: '#ff9800',
      bgGradient: 'linear-gradient(135deg, #ff9800 0%, #e65100 100%)',
      techStack: ["React", "Express", "Socket.io", "PostgreSQL"],
      githubLink: "https://github.com/",
      demoLink: null,
      images: [
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      title: "API Gateway",
      description: "Microserviço robusto para gerenciamento de rotas, autenticação e rate limiting com logging avançado.",
      icon: <Api sx={{ fontSize: 32 }} />,
      previewImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      iconColor: '#e91e63',
      bgGradient: 'linear-gradient(135deg, #e91e63 0%, #c2185b 100%)',
      techStack: ["NestJS", "Redis", "JWT", "Docker"],
      githubLink: "https://github.com/",
      demoLink: null,
      images: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Delivery App",
      description: "Aplicativo mobile para delivery com rastreamento em tempo real e sistema de pagamento integrado.",
      icon: <DeliveryDining sx={{ fontSize: 32 }} />,
      previewImage: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop",
      iconColor: '#2196f3',
      bgGradient: 'linear-gradient(135deg, #2196f3 0%, #0d47a1 100%)',
      techStack: ["React Native", "Node.js", "MongoDB", "Firebase"],
      githubLink: "https://github.com/",
      demoLink: null,
      images: [
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600628421066-f6bda6a5660e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1594149929611-e1b9ff2fa88b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1589308455862-2bb8ffd7a878?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Dashboard Analytics",
      description: "Dashboard interativo para visualização de dados com gráficos dinâmicos e relatórios exportáveis.",
      icon: <Analytics sx={{ fontSize: 32 }} />,
      previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      iconColor: '#9c27b0',
      bgGradient: 'linear-gradient(135deg, #9c27b0 0%, #6a1b9a 100%)',
      techStack: ["React", "D3.js", "Express", "PostgreSQL"],
      githubLink: null,
      demoLink: "https://github.com/",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&h=600&fit=crop"
      ]
    }
  ]

  const handleCardClick = (project: Project): void => {
    setSelectedProject(project)
    setDialogOpen(true)
  }

  const handleCloseDialog = (): void => {
    setDialogOpen(false)
    setSelectedProject(null)
  }

  const handleImageClick = (image: string, index: number): void => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
    setImageDialogOpen(true)
  }

  const handleCloseImageDialog = (): void => {
    setImageDialogOpen(false)
    setSelectedImage(null)
    setIsFullscreen(false)
  }

  const handleNextImage = (): void => {
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      const newIndex = currentImageIndex + 1
      setCurrentImageIndex(newIndex)
      setSelectedImage(selectedProject.images[newIndex])
    }
  }

  const handlePrevImage = (): void => {
    if (selectedProject && currentImageIndex > 0) {
      const newIndex = currentImageIndex - 1
      setCurrentImageIndex(newIndex)
      setSelectedImage(selectedProject.images[newIndex])
    }
  }

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (imageDialogOpen) {
      if (e.key === 'ArrowRight') handleNextImage()
      if (e.key === 'ArrowLeft') handlePrevImage()
      if (e.key === 'Escape') handleCloseImageDialog()
      if (e.key === 'f' || e.key === 'F') toggleFullscreen()
    }
  }

  const toggleFullscreen = (): void => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  // Touch events para mobile
  const handleTouchStart = (e: React.TouchEvent): void => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent): void => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (): void => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) handleNextImage()
    if (isRightSwipe) handlePrevImage()

    setTouchStart(null)
    setTouchEnd(null)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [imageDialogOpen, currentImageIndex])

  useEffect(() => {
    setVisibleProjects(new Array(projects.length).fill(false))
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          projects.forEach((_, index: number) => {
            setTimeout(() => {
              setVisibleProjects((prev: boolean[]) => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }, index * 150)
          })
          setHasAnimated(true)
        }
      },
      { threshold: 0.1 }
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

  return (
    <section
      id="projetos"
      ref={sectionRef}
      style={{
        backgroundColor: '#0a0a18',
        minHeight: '100vh',
        padding: '96px 0',
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        {/* Cabeçalho da seção */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              color: '#ffffff',
              fontSize: { xs: '2rem', md: '2.75rem' },
              mb: 2,
              letterSpacing: '-0.02em'
            }}
          >
            Projetos em Destaque
          </Typography>
        </Box>

        {/* Grid de cards */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {projects.map((project: Project, index: number) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
              <Box sx={{
                opacity: visibleProjects[index] ? 1 : 0,
                transform: visibleProjects[index] ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
                height: '100%'
              }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#131327',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '20px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px ${project.iconColor}60`,
                      borderColor: `${project.iconColor}60`,
                    }
                  }}
                  onClick={() => handleCardClick(project)}
                >
                  {/* Imagem do card */}
                  <Box sx={{
                    background: project.bgGradient,
                    height: '190px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={project.previewImage}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                    />
                    <Box sx={{
                      position: 'absolute',
                      bottom: 0, left: 0, right: 0,
                      height: '60%',
                      background: 'linear-gradient(transparent, rgba(10,10,24,0.85))',
                      zIndex: 1
                    }} />
                    <Box sx={{
                      position: 'absolute',
                      top: 16, left: 16,
                      color: 'white',
                      zIndex: 2,
                      backgroundColor: `${project.iconColor}cc`,
                      borderRadius: '12px',
                      padding: '8px',
                      display: 'flex',
                      backdropFilter: 'blur(8px)',
                      boxShadow: `0 4px 12px ${project.iconColor}60`
                    }}>
                      {project.icon}
                    </Box>
                  </Box>

                  <CardContent sx={{ flex: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        color: '#f1f5f9',
                        mb: 1,
                        fontSize: '1.05rem'
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#94a3b8',
                        mb: 2.5,
                        lineHeight: 1.65,
                        fontSize: '0.875rem',
                        flex: 1
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Box sx={{ mb: 2.5, display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                      {project.techStack.map((tech: string, idx: number) => (
                        <Chip
                          key={idx}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(255,255,255,0.07)',
                            color: '#cbd5e1',
                            fontSize: '0.72rem',
                            fontWeight: 500,
                            height: '24px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            '&:hover': {
                              backgroundColor: `${project.iconColor}30`,
                              color: '#fff',
                              borderColor: `${project.iconColor}80`
                            }
                          }}
                        />
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {project.githubLink && (
                        <Button
                          size="small"
                          variant="outlined"
                          startIcon={<GitHub sx={{ fontSize: '0.9rem !important' }} />}
                          href={project.githubLink}
                          target="_blank"
                          onClick={(e: React.MouseEvent) => e.stopPropagation()}
                          sx={{
                            color: '#e2e8f0',
                            borderColor: 'rgba(255,255,255,0.2)',
                            flex: 1,
                            fontSize: '0.78rem',
                            textTransform: 'none',
                            fontWeight: 500,
                            '&:hover': {
                              borderColor: project.iconColor,
                              backgroundColor: `${project.iconColor}18`,
                              color: '#fff'
                            }
                          }}
                        >
                          GitHub
                        </Button>
                      )}
                      {project.demoLink && (
                        <Button
                          size="small"
                          variant="contained"
                          startIcon={<OpenInNew sx={{ fontSize: '0.9rem !important' }} />}
                          href={project.demoLink}
                          target="_blank"
                          onClick={(e: React.MouseEvent) => e.stopPropagation()}
                          sx={{
                            background: project.bgGradient,
                            color: '#fff',
                            flex: 1,
                            fontSize: '0.78rem',
                            textTransform: 'none',
                            fontWeight: 600,
                            boxShadow: 'none',
                            '&:hover': {
                              boxShadow: `0 4px 16px ${project.iconColor}50`,
                              transform: 'translateY(-1px)'
                            }
                          }}
                        >
                          Demo
                        </Button>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="outlined"
            size="large"
            href="https://github.com/RiquelmePL"
            target="_blank"
            startIcon={<GitHub />}
            sx={{
              color: '#00bcd4',
              borderColor: '#00bcd4',
              borderWidth: '1.5px',
              padding: '12px 36px',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '0.95rem',
              borderRadius: '12px',
              '&:hover': {
                backgroundColor: 'rgba(0,188,212,0.1)',
                borderColor: '#26c6da',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 24px rgba(0,188,212,0.2)'
              },
              transition: 'all 0.2s ease'
            }}
          >
            Ver mais no GitHub
          </Button>
        </Box>
      </Container>

      {/* Dialog de detalhes do projeto */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        fullScreen={fullScreen}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: '#0f0f23',
              borderRadius: fullScreen ? 0 : '24px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 32px 64px rgba(0,0,0,0.7)'
            }
          }
        }}
      >
        {selectedProject && (
          <>
            <Box sx={{ position: 'relative', height: '240px', overflow: 'hidden', flexShrink: 0 }}>
              <img
                src={selectedProject.previewImage}
                alt={selectedProject.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <Box sx={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(to bottom, rgba(15,15,35,0.3) 0%, rgba(15,15,35,0.95) 100%)`
              }} />

              <IconButton
                onClick={handleCloseDialog}
                aria-label="Fechar"
                sx={{
                  position: 'absolute', top: 16, right: 16,
                  color: '#fff',
                  backgroundColor: 'rgba(0,0,0,0.55)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(8px)',
                  '&:hover': { backgroundColor: 'rgba(0,0,0,0.8)' },
                  zIndex: 2
                }}
              >
                <Close />
              </IconButton>

              <Box sx={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                p: { xs: 3, md: 4 }, zIndex: 1
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                  <Box sx={{
                    color: 'white',
                    backgroundColor: `${selectedProject.iconColor}cc`,
                    borderRadius: '10px',
                    padding: '6px',
                    display: 'flex',
                    boxShadow: `0 4px 12px ${selectedProject.iconColor}60`
                  }}>
                    {selectedProject.icon}
                  </Box>
                  <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700, fontSize: { xs: '1.5rem', md: '1.9rem' } }}>
                    {selectedProject.title}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {selectedProject.techStack.map((tech: string, idx: number) => (
                    <Chip
                      key={idx}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(255,255,255,0.15)',
                        color: '#fff',
                        fontWeight: 500,
                        fontSize: '0.75rem',
                        border: '1px solid rgba(255,255,255,0.25)',
                        backdropFilter: 'blur(4px)'
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>

            <DialogContent sx={{ p: { xs: 3, md: 4 }, backgroundColor: '#0f0f23' }}>
              <Typography
                variant="body1"
                sx={{ color: '#cbd5e1', lineHeight: 1.8, mb: 3, fontSize: '0.95rem' }}
              >
                {selectedProject.description}
              </Typography>

              <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 3 }} />

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
                <Code sx={{ color: selectedProject.iconColor, fontSize: '1.1rem' }} />
                <Typography variant="subtitle1" sx={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.95rem' }}>
                  Galeria do Projeto
                </Typography>
                <Chip
                  label={`${selectedProject.images.length} imagens`}
                  size="small"
                  sx={{
                    ml: 1,
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    color: '#94a3b8',
                    fontSize: '0.7rem',
                    height: '20px'
                  }}
                />
              </Box>

              <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 1.5
              }}>
                {selectedProject.images.map((image: string, idx: number) => (
                  <Box
                    key={idx}
                    sx={{
                      position: 'relative',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      aspectRatio: '16/9',
                      border: '1px solid rgba(255,255,255,0.07)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        borderColor: `${selectedProject.iconColor}80`,
                        boxShadow: `0 8px 24px rgba(0,0,0,0.4)`,
                        '& .overlay': { opacity: 1 },
                        '& img': { transform: 'scale(1.06)' }
                      }
                    }}
                    onClick={() => handleImageClick(image, idx)}
                  >
                    <img
                      src={image}
                      alt={`${selectedProject.title} screenshot ${idx + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                    />
                    <Box
                      className="overlay"
                      sx={{
                        position: 'absolute', inset: 0,
                        backgroundColor: 'rgba(0,0,0,0.55)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        opacity: 0, transition: 'opacity 0.25s ease'
                      }}
                    >
                      <ZoomIn sx={{ color: 'white', fontSize: 40 }} />
                    </Box>
                    <Box sx={{
                      position: 'absolute',
                      bottom: 8, right: 8,
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      borderRadius: '4px',
                      padding: '2px 8px',
                      color: 'white',
                      fontSize: '0.7rem',
                      backdropFilter: 'blur(4px)'
                    }}>
                      {idx + 1}/{selectedProject.images.length}
                    </Box>
                  </Box>
                ))}
              </Box>

              <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mt: 4, mb: 3 }} />

              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                {selectedProject.githubLink && (
                  <Button
                    variant="outlined"
                    startIcon={<GitHub />}
                    href={selectedProject.githubLink}
                    target="_blank"
                    sx={{
                      color: '#e2e8f0',
                      borderColor: 'rgba(255,255,255,0.25)',
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: '10px',
                      px: 3,
                      '&:hover': {
                        borderColor: selectedProject.iconColor,
                        backgroundColor: `${selectedProject.iconColor}18`,
                        color: '#fff'
                      }
                    }}
                  >
                    Ver no GitHub
                  </Button>
                )}
                {selectedProject.demoLink && (
                  <Button
                    variant="contained"
                    startIcon={<Launch />}
                    href={selectedProject.demoLink}
                    target="_blank"
                    sx={{
                      background: selectedProject.bgGradient,
                      color: '#fff',
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: '10px',
                      px: 3,
                      boxShadow: `0 4px 16px ${selectedProject.iconColor}40`,
                      '&:hover': {
                        boxShadow: `0 8px 24px ${selectedProject.iconColor}60`,
                        transform: 'translateY(-2px)'
                      },
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Live Demo
                  </Button>
                )}
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>

      {/* Dialog de imagem em tela cheia com slider profissional */}
      <Dialog
        open={imageDialogOpen}
        onClose={handleCloseImageDialog}
        fullScreen
        slots={{
          transition: FullScreenTransition
        }}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }
          }
        }}
      >
        {selectedProject && (
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              px: { xs: 2, sm: 4, md: 8 },
              py: { xs: 2, sm: 4 }
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Barra superior com controles */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 10,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton
                  onClick={handleCloseImageDialog}
                  sx={{
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' }
                  }}
                >
                  <Close />
                </IconButton>
                <Typography sx={{ color: 'white', fontWeight: 500 }}>
                  {selectedProject.title}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  onClick={toggleFullscreen}
                  sx={{
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' }
                  }}
                >
                  {isFullscreen ? <FullscreenExit /> : <Fullscreen />}
                </IconButton>
              </Box>
            </Box>

            {/* Navegação principal */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                transform: 'translateY(-50%)',
                display: 'flex',
                justifyContent: 'space-between',
                zIndex: 10,
                px: { xs: 1, sm: 2 }
              }}
            >
              <IconButton
                onClick={handlePrevImage}
                disabled={currentImageIndex === 0}
                sx={{
                  color: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  width: { xs: 40, sm: 56 },
                  height: { xs: 40, sm: 56 },
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                  '&.Mui-disabled': { 
                    opacity: 0.25,
                    borderColor: 'transparent',
                    backgroundColor: 'rgba(255,255,255,0.05)'
                  }
                }}
              >
                <ChevronLeft sx={{ fontSize: { xs: 28, sm: 36 } }} />
              </IconButton>

              <IconButton
                onClick={handleNextImage}
                disabled={currentImageIndex === selectedProject.images.length - 1}
                sx={{
                  color: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  width: { xs: 40, sm: 56 },
                  height: { xs: 40, sm: 56 },
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                  '&.Mui-disabled': { 
                    opacity: 0.25,
                    borderColor: 'transparent',
                    backgroundColor: 'rgba(255,255,255,0.05)'
                  }
                }}
              >
                <ChevronRight sx={{ fontSize: { xs: 28, sm: 36 } }} />
              </IconButton>
            </Box>

            {/* Imagem principal */}
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <img
                src={selectedImage || selectedProject.images[0]}
                alt={`${selectedProject.title} - imagem ${currentImageIndex + 1}`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '85vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
                  transition: 'all 0.3s ease'
                }}
              />
            </Box>

            {/* Barra inferior com informações e miniaturas */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: 2,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                zIndex: 10
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                {/* Contador e informações */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 500 }}>
                    <Image sx={{ fontSize: '1rem', verticalAlign: 'middle', mr: 0.5 }} />
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Chip
                      size="small"
                      label="Clique nas setas ou use o teclado"
                      sx={{
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '0.65rem',
                        height: '20px'
                      }}
                    />
                  </Box>
                </Box>

                {/* Miniaturas */}
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    overflowX: 'auto',
                    maxWidth: '100%',
                    px: 2,
                    py: 1,
                    '&::-webkit-scrollbar': {
                      height: '4px'
                    },
                    '&::-webkit-scrollbar-track': {
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '4px'
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: 'rgba(255,255,255,0.2)',
                      borderRadius: '4px'
                    }
                  }}
                >
                  {selectedProject.images.map((image: string, idx: number) => (
                    <Paper
                      key={idx}
                      elevation={idx === currentImageIndex ? 8 : 0}
                      onClick={() => {
                        setCurrentImageIndex(idx)
                        setSelectedImage(image)
                      }}
                      sx={{
                        width: { xs: 60, sm: 80 },
                        height: { xs: 45, sm: 60 },
                        flexShrink: 0,
                        borderRadius: '6px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: idx === currentImageIndex 
                          ? `2px solid ${selectedProject.iconColor}` 
                          : '2px solid transparent',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          borderColor: 'rgba(255,255,255,0.3)'
                        }
                      }}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${idx + 1}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </Paper>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Atalhos do teclado */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 100,
                right: 20,
                zIndex: 5,
                display: { xs: 'none', sm: 'block' }
              }}
            >
              <Paper
                sx={{
                  p: 1,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                    <span>← →</span>
                    <span>Navegar</span>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                    <span>ESC</span>
                    <span>Fechar</span>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                    <span>F</span>
                    <span>Tela cheia</span>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Box>
        )}
      </Dialog>

      <style>{`
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  )
}

export default Projects