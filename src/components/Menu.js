import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LongMenu from './LongMenu';
import Logo from '../images/logo.svg'
import Link from '@mui/material/Link';

const StylesLink = styled(Link)(({ theme }) => ({
    color: '#ffffff',
    textTransform: 'capitalize'
 }));

const StylesLogoGrid = styled(Grid)(({ theme }) => ({
   padding: theme.spacing(0),
   alignSelf: 'end'
}));

const StylesMenuItemsGrid = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(0),
    alignSelf: 'center',
 }));

export default function Menu() {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: '25px', paddingBottom: '25px' }} >
      <Grid container spacing={0}>
        <Grid item xs={1}/>
        <StylesLogoGrid item xs={5}>
            <img src={Logo} alt="Лого"></img>
        </StylesLogoGrid>
        <StylesMenuItemsGrid item xs={1}>
           <StylesLink href="#" underline="none">О нас</StylesLink> 
        </StylesMenuItemsGrid>
        <StylesMenuItemsGrid item xs={1}>
           <StylesLink href="#" underline="none">Вариации</StylesLink>
        </StylesMenuItemsGrid>
        <StylesMenuItemsGrid item xs={1}>
           <StylesLink href="#" underline="none">Команда</StylesLink>
        </StylesMenuItemsGrid>
        <StylesMenuItemsGrid item xs={2}>
           <LongMenu/> 
        </StylesMenuItemsGrid>
      </Grid>
    </Box>
  );
}