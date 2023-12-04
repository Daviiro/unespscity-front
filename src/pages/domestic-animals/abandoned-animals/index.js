import React, { useState, useEffect } from 'react';
import { api } from '../../../services/api';
import PagesPieChart from '../../../charts/types/donut';
import { ChartContainer } from '../../../charts/types/donut/chart';
import Header from '../../../components/header';
import MiniCard from '../../../components/mini-card';
import GrayLine from '../../../components/styled-components/gray-line';
import Footer from '../../../components/footer';
import ServiceOrderInformation from '../../../components/forms/ServiceOrderInformation';
import Favorites from '../../../components/favorites';
import Typography from '@mui/material/Typography';
import {
  ContainerBase,
  ContentContainer,
  TopContentContainer,
  DescriptionText,
  MidContentContainer,
} from '../../../components/styled-components/PageStyles';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { StyledHr } from '../../../components/styled-components/StyledHr';

const AnimaisAbandonados = (props) => {
  const [totalNaoResolvidos, setTotalNaoResolvidos] = useState(0);
  const [totalResolvidos, setTotalResolvidos] = useState(0);

  useEffect(() => {
    async function getProblems() {
      try {
        const { data } = await api.get('/animais_abandonados');
        let totalSolicitados = data.length;
        setTotalResolvidos(
          data.filter((service) => service.isResolved === true).length
        );
        setTotalNaoResolvidos(totalSolicitados - totalResolvidos);
      } catch (e) {
        console.log(e);
      }
    }
    getProblems();
  }, []);

  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    props.data.find((favoriteX) => favoriteX.id === 20 && setIsFavorite(true));
  }, []);
  const handleFavorite = () => {
    if (!isFavorite) {
      props.handleAddFavorite({
        id: 20,
        name: 'Animais Abandonados',
        img: 'assets/img/home_animais_domesticos.png',
        link: '/animais_abandonados',
      }); //se favoritou o servico
    } else {
      props.handleSubFavorite({
        id: 20,
        name: 'Animais Abandonados',
        img: 'assets/img/home_animais_domesticos.png',
        link: '/animais_abandonados',
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
            source="/assets/img/home_animais_domesticos.png"
            titulo="Animais Domésticos"
            linkItems={[
              {
                id: 1,
                name: 'Animais Abandonados',
                link: '/animais_abandonados',
              },
              {
                id: 2,
                name: 'Animais Perdidos',
                link: '/animais_perdidos_opcoes',
              },
              {
                id: 3,
                name: 'Maus tratos à Animais',
                link: '/maus_tratos',
              },
              {
                id: 4,
                name: 'Animais Sinantrópicos',
                link: '/animais_sinantropicos',
              },
              {
                id: 5,
                name: 'Adoção de Animais',
                link: '/adocao_animais_opcoes',
              },
            ]}
          />
          <div style={{ marginTop: '14px' }}>
            <div style={{ textAlign: 'center' }}>
              <Typography variant="h4">Animais Abandonados</Typography>
            </div>
            <DescriptionText>
              Utilize este serviço para informar o último local em que o animal
              foi avistado para que assim seja feito o resgate do animal.
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
        <MidContentContainer>
          <ServiceOrderInformation
            srcaddress="/animais_abandonados"
            descriptionHelperText="Descreva com detalhes o local onde você encontrou o animal que foi abandonado."
          />
        </MidContentContainer>
      </ContentContainer>
      <GrayLine />
      <ChartContainer>
        <h3> Resgastes solicitados e resolvidos: </h3>
        <PagesPieChart solved={totalResolvidos} unsolved={totalNaoResolvidos} />
      </ChartContainer>
      <Footer />
    </ContainerBase>
  );
};
export default AnimaisAbandonados;
