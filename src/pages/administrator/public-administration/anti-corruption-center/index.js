import MiniCard from '../../../../components/mini-card';
import {
  ContainerBase,
  ContentContainer,
  TopContentContainer,
  MidContentContainer,
  DescriptionText,
} from '../../../../components/styled-components/PageStyles';
import AdminHeader from '../../../../components/header/admin';
import Footer from '../../../../components/footer';
import Typography from '@mui/material/Typography';

const AdminAntiCorruptionCenter = () => {
  return (
    <ContainerBase>
      <AdminHeader />
      <ContentContainer>
        <TopContentContainer>
          <MiniCard
            source="/assets/img/home_administracao_publica.png"
            titulo="Administração Pública"
            linkItems={[
              {
                id: 1,
                name: 'Central Anticorrupção',
                link: '/admin/central_anticorrupcao',
              },
              {
                id: 2,
                name: 'Conheça os Gestores',
                link: '/admin/conheca_os_gestores',
              },
              {
                id: 3,
                name: 'Consultar propostas de leis',
                link: '/admin/consultar_propostas-de_leis',
              },
            ]}
          />
          <div style={{ marginTop: '14px' }}>
            <div style={{ textAlign: 'center' }}>
              <Typography variant="h4">Central Anticorrupção</Typography>
            </div>
            <DescriptionText>
              Consulte aqui a lista de evidências contra atos de corrupção e
              improbidade administrativa.
            </DescriptionText>
          </div>
          <div></div>
        </TopContentContainer>
        <MidContentContainer></MidContentContainer>
      </ContentContainer>
      <Footer />
    </ContainerBase>
  );
};

export default AdminAntiCorruptionCenter;
