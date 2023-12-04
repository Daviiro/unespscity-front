import React from 'react';
import { Link } from 'react-router-dom';
import { PopupBackground, PopupContainer } from '../styles';
import MiniCard from '../mini-card';
import Button from '@mui/material/Button';

const SanitarySurveillancePopUp = (props) => {
  return props.trigger ? (
    <PopupBackground>
      <PopupContainer style={{ width: '55%' }}>
        <Link
          to="/limpeza_de_piscinas"
          style={{ textDecoration: 'none', color: '#1b262c' }}
        >
          <MiniCard
            source="/assets/img/home_piscinas.png"
            titulo="Limpeza de Piscinas"
          />
        </Link>
        <Link
          to="/limpeza_de_terreno"
          style={{ textDecoration: 'none', color: '#1b262c' }}
        >
          <MiniCard
            source="/assets/img/home_terrenos.png"
            titulo="Limpeza de Terreno"
          />
        </Link>
        <Link
          to="/restaurantes"
          style={{ textDecoration: 'none', color: '#1b262c' }}
        >
          <MiniCard
            source="/assets/img/home_restaurantes.png"
            titulo="Estabelecimentos Irregulares"
          />
        </Link>
        <Button
          onClick={() => props.setTrigger(false)}
          variant="contained"
          style={{ position: 'absolute', bottom: '2vh', right: '2vh' }}
        >
          Fechar
        </Button>
      </PopupContainer>
    </PopupBackground>
  ) : (
    ''
  );
};

export default SanitarySurveillancePopUp;
