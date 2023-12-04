import { useState, useEffect, useContext } from 'react';
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
import Map from './map';
import Favorites from '../../../components/favorites';
import ShowAllPolygons from '../../administrator/environment/refuse-collection/show-all-polygons';
import { fetchCityForID } from '../../../services/IBGE';
import { fetchLatLong } from '../../../services/GoogleMaps';
import LocalContext from '../../user-location/Context';
import LeafLetMap from './leaflet-map/leaflet-map';
import AdmLeafLetMap from '../../administrator/environment/refuse-collection/leaflet-map/leaflet-map';

const RefuseCollection = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [cityName, setCityName] = useState('');
  const [formValues, setFormValues] = useContext(LocalContext);
  // useEffect(() => {
  // 	initMap();

  // 	// props.data.find(
  // 	// 	(favoriteX) => favoriteX.id === 27 && setIsFavorite(true)
  // 	// );
  // }, []);
  const handleFavorite = () => {
    if (!isFavorite) {
      props.handleAddFavorite({
        id: 27,
        name: 'Coleta de Lixo',
        img: '/assets/img/home_coleta_lixo.png',
        link: '/coleta_de_lixo',
      }); //se favoritou o servico
    } else {
      props.handleSubFavorite({
        id: 27,
        name: 'Coleta de Lixo',
        img: '/assets/img/home_coleta_lixo.png',
        link: '/coleta_de_lixo',
      }); //se desfavoritou o servico
    }
    setIsFavorite(!isFavorite);
  };
  fetchCityForID(formValues.city).then((city) => {
    setCityName(city);
  }); //API DO IBGE, SEM PROBLEMAS DE COBRANCA
  useEffect(() => {
    if (formValues.city !== undefined) {
      fetchCityForID(formValues.city).then((city) => {
        setCityName(city);
      }); //API DO IBGE, SEM PROBLEMAS DE COBRANCA
      //DENTRO DESTE TEM A API DO GEOCODE, DE JEITO NENHUM CRIE UM LOOP NESTE USEEFFECT
    }
  }, [cityName]);

  return (
    <ContainerBase>
      <Header />
      <Favorites data={props.data} />
      <ContentContainer>
        <TopContentContainer>
          <MiniCard
            source="/assets/img/home_meio_ambiente.png"
            titulo="Meio Ambiente"
            linkItems={[
              {
                id: 1,
                name: 'Adoção de Áreas Públicas',
                link: '/adocao_areas_opcoes',
              },
              {
                id: 2,
                name: 'Monitoramento do Tempo',
                link: '/monitoramento',
              },
              {
                id: 3,
                name: 'Coleta de Lixo',
                link: '/coleta_de_lixo',
              },
            ]}
          />
          <div style={{ marginTop: '14px' }}>
            <div style={{ textAlign: 'center' }}>
              <Typography variant="h4">Coleta de Lixo</Typography>
            </div>
            <DescriptionText>
              Neste serviço você terá informações sobre as áreas e horários de
              circulação de cada um dos caminhões de lixo.
              <br></br>
              Para pegar a localização aproximada clique no botão. Ou insira seu
              Endereço no campo abaixo.
              <br></br>
              Para saber informações da rota, clique na área desejada no mapa.
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
          <LeafLetMap />
        </MidContentContainer>
      </ContentContainer>
      <Footer />
    </ContainerBase>
  );
};

export default RefuseCollection;
