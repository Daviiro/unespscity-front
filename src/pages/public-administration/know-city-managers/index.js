import React, { useState, useEffect } from 'react';
import Header from '../../../components/header';
import MiniCard from '../../../components/mini-card';
import ListCard from '../../../components/card-list';
import Footer from '../../../components/footer';
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

const Gestores = (props) => {
  const [gestores, setGestores] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    props.data.find((favoriteX) => favoriteX.id === 46 && setIsFavorite(true));
  }, []);
  const handleFavorite = () => {
    if (!isFavorite) {
      props.handleAddFavorite({
        id: 46,
        name: 'Conheça os Gestores',
        img: '/assets/img/home_conheca_os_gestores.png',
        link: '/conheca_os_gestores',
      }); //se favoritou o servico
    } else {
      props.handleSubFavorite({
        id: 46,
        name: 'Conheça os Gestores',
        img: '/assets/img/home_conheca_os_gestores.png',
        link: '/conheca_os_gestores',
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
              <Typography variant="h4">Conheça os Gestores</Typography>
            </div>
            <DescriptionText>
              Conheça os atuais gestores que trabalham diariamente servindo às
              necessidades da sua cidade!
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
          <ListCard
            source="/assets/img/home_administracao_publica.png"
            nome="Nome e Sobrenome"
            sobrenome="Cargo"
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
          />
          <ListCard
            source="/assets/img/home_administracao_publica.png"
            nome="Nome e Sobrenome"
            sobrenome="Cargo"
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
          />
          <ListCard
            source="/assets/img/home_administracao_publica.png"
            nome="Nome e Sobrenome"
            sobrenome="Cargo"
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
          />
          <ListCard
            source="/assets/img/home_administracao_publica.png"
            nome="Nome e Sobrenome"
            sobrenome="Cargo"
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
          />
          <ListCard
            source="/assets/img/home_administracao_publica.png"
            nome="Nome e Sobrenome"
            sobrenome="Cargo"
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
          />
          <ListCard
            source="/assets/img/home_administracao_publica.png"
            nome="Nome e Sobrenome"
            sobrenome="Cargo"
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
          />
          <ListCard
            source="/assets/img/home_administracao_publica.png"
            nome="Nome e Sobrenome"
            sobrenome="Cargo"
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
          />
          <ListCard
            source="/assets/img/home_administracao_publica.png"
            nome="Nome e Sobrenome"
            sobrenome="Cargo"
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
          />
        </MidContentContainer>
      </ContentContainer>
      <Footer />
    </ContainerBase>
  );
};
export default Gestores;
