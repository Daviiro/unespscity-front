import React from 'react';
import { Link } from 'react-router-dom';
import { PopupBackground, PopupContainer } from '../styles';
import MiniCard from '../mini-card';
import Button from '@mui/material/Button';

const SecurityDefensePopUp = (props) => {
  return props.trigger ? (
    <PopupBackground>
      <PopupContainer style={{ width: '45%' }}>
        <Link
          to="/registro_acidentes"
          style={{ textDecoration: 'none', color: '#1b262c' }}
        >
          <MiniCard
            source="/assets/img/home_seguranca_defesa_civil.png"
            titulo="Registro de Acidentes"
          />
        </Link>
        <Link
          to="/registro_roubos"
          style={{ textDecoration: 'none', color: '#1b262c' }}
        >
          <MiniCard
            source="/assets/img/home_registro_roubos_furtos.png"
            titulo="Registro de Roubos e Furtos"
          />
        </Link>
        <Link
          to="/violencia_domestica"
          style={{ textDecoration: 'none', color: '#1b262c' }}
        >
          <MiniCard
            source="/assets/img/home_violencia_domestica.png"
            titulo="Vítimas de violência doméstica"
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

export default SecurityDefensePopUp;
