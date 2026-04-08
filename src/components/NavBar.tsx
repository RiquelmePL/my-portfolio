import { useState, useEffect } from 'react'
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
  useTheme,
  Fade
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import HomeIcon from '@mui/icons-material/Home'
import CodeIcon from '@mui/icons-material/Code'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const menuItems = [
    { name: 'Início', icon: <HomeIcon />, id: 'hero' },
    { name: 'Sobre', icon: <SchoolIcon />, id: 'sobre' },
    { name: 'Habilidades', icon: <CodeIcon />, id: 'habilidades' },
    { name: 'Projetos', icon: <WorkIcon />, id: 'projetos' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 70
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setMobileOpen(false)
  }

  const drawer = (
    <Box sx={{ textAlign: 'center', height: '100%', position: 'relative' }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'flex-end', 
        p: 2,
        borderBottom: '1px solid rgba(0, 188, 212, 0.2)'
      }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#00bcd4' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <Typography 
        variant="h6" 
        sx={{ 
          my: 3, 
          color: '#00bcd4',
          fontWeight: 'bold',
          letterSpacing: '2px'
        }}
      >
        Menu
      </Typography>
      
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.name} 
            onClick={() => scrollToSection(item.id)}
            sx={{ 
              '&:hover': { 
                backgroundColor: 'rgba(0, 188, 212, 0.1)',
                cursor: 'pointer',
                transform: 'translateX(10px)',
                transition: 'all 0.3s ease'
              },
              mb: 1,
              borderRadius: '0 20px 20px 0'
            }}
          >
            <ListItemIcon sx={{ color: '#00bcd4', minWidth: '40px' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.name} 
              sx={{ 
                textAlign: 'left', 
                color: 'white',
                '& .MuiTypography-root': {
                  fontWeight: 500
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: scrolled 
            ? 'rgba(10, 10, 10, 0.98)' 
            : 'rgba(10, 10, 10, 0.85)',
          backdropFilter: 'blur(15px)',
          boxShadow: scrolled 
            ? '0 4px 30px rgba(0, 0, 0, 0.3)' 
            : '0 2px 10px rgba(0, 0, 0, 0.2)',
          borderBottom: '1px solid rgba(0, 188, 212, 0.3)',
          transition: 'all 0.3s ease'
        }}
      >
        <Toolbar sx={{ 
          justifyContent: 'space-between',
          minHeight: { xs: '60px', md: '65px' },
          px: { xs: 2, md: 4 }
        }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #00bcd4 0%, #1976d2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              cursor: 'pointer',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              letterSpacing: '1px',
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease'
              }
            }}
            onClick={() => scrollToSection('hero')}
          >
            &lt;RP/&gt;
          </Typography>

          {isMobile ? (
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ 
                color: '#00bcd4',
                '&:hover': {
                  backgroundColor: 'rgba(0, 188, 212, 0.1)',
                  transform: 'rotate(90deg)',
                  transition: 'transform 0.3s ease'
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  startIcon={item.icon}
                  sx={{
                    color: 'white',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    px: 1.5,
                    py: 0.8,
                    borderRadius: '25px',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: '0%',
                      height: '2px',
                      backgroundColor: '#00bcd4',
                      transition: 'all 0.3s ease',
                      transform: 'translateX(-50%)'
                    },
                    '&:hover': {
                      color: '#00bcd4',
                      backgroundColor: 'rgba(0, 188, 212, 0.1)',
                      transform: 'translateY(-2px)',
                      '&::before': {
                        width: '80%'
                      }
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            backgroundColor: '#0a0a0a',
            borderLeft: '1px solid rgba(0, 188, 212, 0.3)',
            backgroundImage: 'linear-gradient(135deg, rgba(0, 188, 212, 0.05) 0%, rgba(25, 118, 210, 0.05) 100%)'
          }
        }}
      >
        <Fade in={mobileOpen} timeout={300}>
          <div>
            {drawer}
          </div>
        </Fade>
      </Drawer>
    </>
  )
}

export default NavBar