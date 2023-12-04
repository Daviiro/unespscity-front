import React from 'react';
import { Link } from 'react-router-dom';
import { PopupBackground, PopupContainer } from '../../../home/pop-up/styles';
import MiniCard from '../../../home/pop-up/mini-card';
import Button from '@mui/material/Button';

const PublicAdministrationPopUp = (props) => {
  return props.trigger ? (
    <PopupBackground>
      <PopupContainer style={{ width: '50%' }}>
        <Link
          to="/admin/conheca_os_gestores"
          style={{ textDecoration: 'none', color: '#1b262c' }}
        >
          <MiniCard
            source="/assets/img/home_conheca_os_gestores.png"
            titulo="Conheça os Gestores"
          />
        </Link>
        <Link
          to="/admin/consultar_propostas_de_leis"
          style={{ textDecoration: 'none', color: '#1b262c' }}
        >
          <MiniCard
            source="/assets/img/home_noticias.png"
            titulo="Consultar as propostas dos vereadores"
          />
        </Link>
        <Link
          to="/admin/central_anticorrupcao"
          style={{ textDecoration: 'none', color: '#1b262c' }}
        >
          <MiniCard
            source="/assets/img/home_administracao_publica.png"
            titulo="Central Anticorrupção"
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

export default PublicAdministrationPopUp;
