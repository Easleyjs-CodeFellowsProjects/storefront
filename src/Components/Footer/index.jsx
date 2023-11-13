import { Box, Grid, Typography } from '@mui/material'
import { withStyles } from '@mui/material/styles'


/*
const styles = theme => ({
    root: {
      marginTop: 30,
      backgroundColor: `${theme.palette.primary[500]}`,
      borderTop: 'solid 3px #998643',
      paddingTop: '16px',
      overflowX: 'hidden'
    },
    footerSections: {
      margin: '0 16px'
    },
    subFooter: {
      backgroundColor: 'rgba(0, 0, 0, 0.15)',
      padding: '8px 16px 8px 16px',
      marginTop: '8px'
    },
    footerText: {
      color: '#fff',
      fontSize: '18px',
      lineHeight: 1.5
    },
    invertedBtnDark: {
      color: '#fff',
      backgroundColor: 'transparent',
      border: '2px #fff solid',
      boxShadow: 'none',
      margin: '8px'
    },
    white: {
      color: '#ffffff'
    },
    flexContainer: {
      display: 'flex'
    }
  })
*/

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
                    p: 2, 
                    /*height: 20,*/
                    maxHeight: 20,
                    position: 'top',
            }}
        >
            <Typography sx={{ 
                textAlign:'center',
                lineHeight: 0.25,
                fontSize: '0.75rem',
            }}>
                &copy; J.E. WebDesigns
            </Typography>
        </Box>
    )
}