import React from 'react';
import { Link } from 'react-router-dom';
import { PopupBackground, PopupContainer } from '../styles';
import MiniCard from '../mini-card';
import Button from '@mui/material/Button';

const TrashRemovalPopUp = (props) => {
  return props.trigger ? (
    <PopupBackground>
      <PopupContainer style={{ width: '50%' }}>
        <Link
          to="/animais_mortos"
          style={{ textDecoration: 'none', color: '#1b262c' }}
        >
          <MiniCard
            source="/assets/img/home_animais_mortos.png"
            titulo="Animais Mortos"
          />
        </Link>
        <Link
          to="/residuos_solidos"
          style={{ textDecoration: 'none', color: '#1b262c' }}
        >
          <MiniCard
            source="/assets/img/home_remocao_detritos.png"
            titulo="Resíduos Sólidos"
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

export default TrashRemovalPopUp;
