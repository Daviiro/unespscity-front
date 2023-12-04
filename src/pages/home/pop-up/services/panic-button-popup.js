import React from 'react';
import { Link } from 'react-router-dom';
import { PopupBackground, PopupContainer } from '../styles';
import MiniCard from '../mini-card';
import Button from '@mui/material/Button';

const PanicButtonPopUp = (props) => {
  return props.trigger ? (
    <PopupBackground>
      <PopupContainer style={{ width: '50%' }}>
        <Link
          to="/botao_panico"
          style={{ textDecoration: 'none', color: '#1b262c' }}
        >
          <MiniCard
            source="/assets/img/home_botao_panico.png"
            titulo="Cadastrar se no Botão do Panico"
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

export default PanicButtonPopUp;
