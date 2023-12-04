import { useState, useEffect } from 'react';
import Header from '../../../components/header';
import {
  ContainerBase,
  ContentContainer,
  TopContentContainer,
  DescriptionText,
  MidContentContainer,
} from '../../../components/styled-components/PageStyles';
import MiniCard from '../../../components/mini-card';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import Typography from '@mui/material/Typography';
import { StyledHr } from '../../../components/styled-components/StyledHr';
import Footer from '../../../components/footer';
import Favorites from '../../../components/favorites';

const ProposedLegislation = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    props.data.find((favoriteX) => favoriteX.id === 47 && setIsFavorite(true));
  }, []);
  const handleFavorite = () => {
    if (!isFavorite) {
      props.handleAddFavorite({
        id: 47,
        name: 'Consultar propostas dos vereadores',
        img: '/assets/img/home_noticias.png',
        link: '/consultar_propostas-de-leis',
      }); //se favoritou o servico
    } else {
      props.handleSubFavorite({
        id: 47,
        name: 'Consultar propostas dos vereadores',
        img: '/assets/img/home_noticias.png',
        link: '/consultar_propostas-de-leis',
      }); //se desfavoritou o servico
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <ContainerBase>
      <Header />
      <Favorites data={props.data} />
      <ContentContainer>
        <TopContentContainer>
          <MiniCard
            source="/assets/img/home_administracao_publica.png"
            titulo="Administração Pública"
            linkItems={[
              {
                id: 1,
                name: 'Conheça os Gestores',
                link: '/conheca_os_gestores',
              },
              {
                id: 2,
                name: 'Consultar as propostas dos vereadores',
                link: '/consultar_propostas_de_leis',
              },
              {
                id: 3,
                name: 'Central Anticorrupção',
                link: '/central_anticorrupcao',
              },
            ]}
          />
          <div style={{ marginTop: '14px' }}>
            <div style={{ textAlign: 'center' }}>
              <Typography variant="h4">
                Consultar propostas dos vereadores
              </Typography>
            </div>
            <DescriptionText>
              Neste serviço você pode acompanhar propostas de leis dos
              vereadores de sua cidade.
            </DescriptionText>
          </div>
          {isFavorite ? (
            <span>
              <AiFillStar
                style={{
                  cursor: 'pointer',
                  margin: '.8rem',
                  stroke: 'black',
                  strokeWidth: '5',
                }}
                color={'yellow'}
                size={25}
                onClick={() => handleFavorite()}
              />
            </span>
          ) : (
            <AiOutlineStar
              style={{
                cursor: 'pointer',
                margin: '.8rem',
                stroke: 'black',
                strokeWidth: '5',
              }}
              size={25}
              onClick={() => handleFavorite()}
            />
          )}
          <StyledHr />
        </TopContentContainer>
        <MidContentContainer></MidContentContainer>
      </ContentContainer>
      <Footer />
    </ContainerBase>
  );
};

export default ProposedLegislation;
