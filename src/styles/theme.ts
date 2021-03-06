import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const customTheme = extendTheme({
  colors: {
    brand: {
      400: '#7b7bff',
      500: '#6c6cff'
    }
  },
  styles: {
    global: props => ({
      body: {
        color: mode('gray.700', 'whiteAlpha.900')(props),
        fontFamily: 'Inter, sans-serif',
        '.deleted': {
          color: '#ff8383 !important',
          fontStyle: 'normal !important'
        },
        '.inserted': {
          color: '#b5f4a5 !important',
          fontStyle: 'normal !important'
        }
      }
    })
  },
  shadows: {
    base: '0px 1px 3px 0px rgba(54,74,99,0.05)'
  },
  textStyles: {
    heading: {
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: '-0.015em',
      lineHeight: '1.24',
      fontSize: { base: '2rem', md: '3.5rem' }
    },
    'heading-2': {
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: '-0.015em',
      lineHeight: '1.24',
      fontSize: { base: '1.75rem', md: '2.75rem' }
    },
    caps: {
      textTransform: 'uppercase',
      fontSize: 'sm',
      letterSpacing: 'widest',
      fontWeight: 'bold'
    }
  }
})

export default customTheme
