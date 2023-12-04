import React from 'react';
import { Link } from 'react-router-dom';
import { PopupBackground, PopupContainer } from '../../../home/pop-up/styles';
import MiniCard from '../../../home/pop-up/mini-card';
import Button from '@mui/material/Button';

const SanitarySurveillancePopUp = (props) => {
  return props.trigger ? (
    <PopupBackground>
      <PopupContainer style={{ width: '55%' }}>
        <Link
          to="/admin/limpeza_de_piscinas"
          style={{ textDecoration: 'none', color: '#1b262c' }}
        >
          <MiniCard
            source="/assets/img/home_piscinas.png"
            titulo="Limpeza de Piscinas"
          />
        </Link>
        <Link
          to="/admin/limpeza_de_terreno"
          style={{ textDecoration: 'none', color: '#1b262c' }}
        >
          <MiniCard
            source="/assets/img/home_terrenos.png"
            titulo="Limpeza de Terreno"
          />
        </Link>
        <Link
          to="/admin/restaurantes"
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
