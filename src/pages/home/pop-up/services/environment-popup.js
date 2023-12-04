import React from 'react';
import { Link } from 'react-router-dom';
import { PopupBackground, PopupContainer } from '../styles';
import MiniCard from '../mini-card';
import Button from '@mui/material/Button';

const EnvironmentPopUp = (props) => {
  return props.trigger ? (
    <PopupBackground>
      <PopupContainer style={{ width: '50%' }}>
        <Link
          to="/adocao_areas_opcoes"
          style={{ textDecoration: 'none', color: '#1b262c' }}
        >
          <MiniCard
            source="/assets/img/home_pracas.png"
            titulo="Adoção de Áreas Públicas"
          />
        </Link>
        <Link
          to="/monitoramento"
          style={{ textDecoration: 'none', color: '#1b262c' }}
        >
          <MiniCard
            source="/assets/img/home_monitoramento_tempo.png"
            titulo="Monitoramento do Tempo"
          />
        </Link>
        <Link
          to="/coleta_de_lixo"
          style={{ textDecoration: 'none', color: '#1b262c' }}
        >
          <MiniCard
            source="/assets/img/home_coleta_lixo.png"
            titulo="Coleta de Lixo"
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

export default EnvironmentPopUp;
