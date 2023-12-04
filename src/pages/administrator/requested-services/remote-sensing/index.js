import React from 'react';
import { Link } from 'react-router-dom';
import { PopupBackground, PopupContainer } from '../../../home/pop-up/styles';
import MiniCard from '../../../home/pop-up/mini-card';
import Button from '@mui/material/Button';

const RemoteSensingPopUp = (props) => {
  return props.trigger ? (
    <PopupBackground>
      <PopupContainer style={{ width: '50%' }}>
        <Link
          to="/admin/monitoramento_guardinha"
          style={{ textDecoration: 'none', color: '#1b262c' }}
        >
          <MiniCard
            source="/assets/img/home_monitoramento_guardinha.png"
            titulo="Monitoramento do Guardinha"
          />
        </Link>
        <Link
          to="/admin/monitoramento_pessoas_veiculos"
          style={{ textDecoration: 'none', color: '#1b262c' }}
        >
          <MiniCard
            source="/assets/img/home_monitoramento_veiculos.png"
            titulo="Monitoramento de Veiculos"
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

export default RemoteSensingPopUp;
