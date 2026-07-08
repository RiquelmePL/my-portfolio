import { Container, Grid, Typography, Box, Card, CardContent } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import type { IconType } from 'react-icons'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNestjs,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiRedis,
  SiLinux,
  SiSwagger
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { DiMsqlServer } from 'react-icons/di'
import { BsKanban } from 'react-icons/bs'
import {
  TbDatabase,
  TbApi,
  TbInfinity,
  TbUsersGroup,
  TbMessageCircle,
  TbBulb,
  TbTrophy,
  TbChartBar,
  TbMap2,
  TbSitemap
} from 'react-icons/tb'

interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  category: string;
  icon: IconType;
  iconColor: string;
  items: SkillItem[];
}

const Skills = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false, false, false])
  const sectionRef = useRef<HTMLElement | null>(null)
  const [hasAnimated, setHasAnimated] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          skills.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }, index * 120)
          })
          setHasAnimated(true)
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

  const skills: SkillCategory[] = [
    {
      category: "Frontend",
      icon: SiReact,
      iconColor: '#0891b2',
      items: [
        { name: "React", icon: SiReact, color: '#61DAFB' },
        { name: "React Native", icon: SiReact, color: '#61DAFB' },
        { name: "Next.js", icon: SiNextdotjs, color: '#111111' },
        { name: "TypeScript", icon: SiTypescript, color: '#3178C6' },
        { name: "JavaScript", icon: SiJavascript, color: '#F0DB4F' },
        { name: "HTML5", icon: SiHtml5, color: '#E34F26' },
        { name: "CSS3", icon: SiCss, color: '#1572B6' }
      ]
    },
    {
      category: "Backend",
      icon: SiNodedotjs,
      iconColor: '#2e7d32',
      items: [
        { name: "Node.js", icon: SiNodedotjs, color: '#339933' },
        { name: "NestJS", icon: SiNestjs, color: '#E0234E' },
        { name: "Express", icon: SiExpress, color: '#111111' },
        { name: "Python", icon: SiPython, color: '#3776AB' },
        { name: "FastAPI", icon: SiFastapi, color: '#009688' },
        { name: "RESTful APIs", icon: TbApi, color: '#0d9488' }
      ]
    },
    {
      category: "Banco de Dados",
      icon: TbDatabase,
      iconColor: '#e65100',
      items: [
        { name: "PostgreSQL", icon: SiPostgresql, color: '#4169E1' },
        { name: "PostGIS", icon: TbMap2, color: '#2E86AB' },
        { name: "SQL Server", icon: DiMsqlServer, color: '#CC2927' },
        { name: "MySQL", icon: SiMysql, color: '#4479A1' },
        { name: "Oracle", icon: TbDatabase, color: '#F80000' }
      ]
    },
    {
      category: "DevOps & Ferramentas",
      icon: SiDocker,
      iconColor: '#c2185b',
      items: [
        { name: "Git", icon: SiGit, color: '#F05032' },
        { name: "GitHub", icon: SiGithub, color: '#181717' },
        { name: "Docker", icon: SiDocker, color: '#2496ED' },
        { name: "Redis", icon: SiRedis, color: '#DC382D' },
        { name: "CI/CD", icon: TbInfinity, color: '#2088FF' },
        { name: "Linux", icon: SiLinux, color: '#E8A33D' }
      ]
    },
    {
      category: "Cloud & Análise",
      icon: FaAws,
      iconColor: '#1565c0',
      items: [
        { name: "AWS", icon: FaAws, color: '#FF9900' },
        { name: "Power BI", icon: TbChartBar, color: '#F2C811' },
        { name: "Swagger/OpenAPI", icon: SiSwagger, color: '#85EA2D' },
        { name: "Modelagem UML", icon: TbSitemap, color: '#546e7a' }
      ]
    },
    {
      category: "Metodologias & Soft Skills",
      icon: TbUsersGroup,
      iconColor: '#6a1b9a',
      items: [
        { name: "Scrum/Kanban", icon: BsKanban, color: '#7c3aed' },
        { name: "Liderança", icon: TbTrophy, color: '#9c27b0' },
        { name: "Comunicação", icon: TbMessageCircle, color: '#9c27b0' },
        { name: "Trabalho em Equipe", icon: TbUsersGroup, color: '#9c27b0' },
        { name: "Resolução de Problemas", icon: TbBulb, color: '#9c27b0' }
      ]
    }
  ]

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#f7f7fa',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '96px 0'
      }}
    >
      {/* Blobs decorativos de fundo */}
      <Box sx={{
        position: 'absolute',
        top: '-10%',
        right: '-8%',
        width: '420px',
        height: '420px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(8,145,178,0.10) 0%, transparent 70%)',
        filter: 'blur(20px)',
        pointerEvents: 'none'
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '-12%',
        left: '-6%',
        width: '380px',
        height: '380px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(156,39,176,0.09) 0%, transparent 70%)',
        filter: 'blur(20px)',
        pointerEvents: 'none'
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center" mb={7}>
          <Typography
            sx={{
              display: 'inline-block',
              color: '#0891b2',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              mb: 1.5,
              px: 2,
              py: 0.5,
              borderRadius: '999px',
              backgroundColor: 'rgba(8,145,178,0.08)'
            }}
          >
            Stack &amp; Ferramentas
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              color: '#0d0d1d',
              fontSize: { xs: '2rem', md: '2.5rem' },
              letterSpacing: '-0.02em',
              mb: 1.5
            }}
          >
            Habilidades Técnicas
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {skills.map((skillCategory, index) => {
            const CategoryIcon = skillCategory.icon
            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Box sx={{
                  opacity: visibleCards[index] ? 1 : 0,
                  transform: visibleCards[index] ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`,
                  height: '100%'
                }}>
                  <Card
                    sx={{
                      position: 'relative',
                      height: '100%',
                      minHeight: '260px',
                      borderRadius: '20px',
                      backgroundColor: 'white',
                      border: '1px solid rgba(15,23,42,0.06)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                      boxShadow: '0 2px 10px rgba(15,23,42,0.05)',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: `0 16px 32px rgba(15,23,42,0.12)`
                      }
                    }}
                  >
                    {/* Barra de destaque no topo */}
                    <Box sx={{
                      height: '4px',
                      width: '100%',
                      background: `linear-gradient(90deg, ${skillCategory.iconColor}, ${skillCategory.iconColor}40)`
                    }} />

                    <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.75, mb: 2.5 }}>
                        <Box sx={{
                          color: skillCategory.iconColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: `linear-gradient(135deg, ${skillCategory.iconColor}22, ${skillCategory.iconColor}0d)`,
                          borderRadius: '14px',
                          width: '48px',
                          height: '48px',
                          flexShrink: 0
                        }}>
                          <CategoryIcon size={24} />
                        </Box>
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{ color: '#0d0d1d', fontSize: '1.1rem', fontWeight: 700 }}
                        >
                          {skillCategory.category}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignContent: 'flex-start' }}>
                        {skillCategory.items.map((skill, idx) => {
                          const SkillIcon = skill.icon
                          return (
                            <Box
                              key={idx}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.75,
                                backgroundColor: '#f8fafc',
                                border: '1px solid rgba(15,23,42,0.07)',
                                borderRadius: '10px',
                                px: 1.25,
                                py: 0.6,
                                cursor: 'default',
                                transition: 'all 0.25s ease',
                                '&:hover': {
                                  backgroundColor: `${skill.color}14`,
                                  borderColor: `${skill.color}55`,
                                  transform: 'translateY(-2px)',
                                  boxShadow: `0 6px 14px ${skill.color}25`
                                }
                              }}
                            >
                              <SkillIcon size={15} color={skill.color} style={{ flexShrink: 0 }} />
                              <Typography sx={{ fontSize: '0.78rem', fontWeight: 600, color: '#334155' }}>
                                {skill.name}
                              </Typography>
                            </Box>
                          )
                        })}
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </section>
  )
}

export default Skills