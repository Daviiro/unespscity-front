import React, { useState, useEffect } from 'react';
import AdminHeader from '../../../../components/header/admin';
import MiniCard from '../../../../components/mini-card';
//import ListCard from "../../../../components/card-list";
import Footer from '../../../../components/footer';
import Typography from '@mui/material/Typography';
import {
  ContainerBase,
  ContentContainer,
  TopContentContainer,
  DescriptionText,
  MidContentContainer,
} from '../../../../components/styled-components/PageStyles';
import { StyledHr } from '../../../../components/styled-components/StyledHr';
import AdminListCard from '../../../../components/card-list-admin';
import { api } from '../../../../services/api';

const AdminTheftRegister = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function getProblems() {
      try {
        const { data } = await api.get('/theftregister');
        setProblems(data);
      } catch (e) {
        console.log(e);
      }
    }
    getProblems();
  }, []);

  return (
    <ContainerBase>
      <AdminHeader />
      <ContentContainer>
        <TopContentContainer>
          <MiniCard
            source="/assets/img/home_seguranca_defesa_civil.png"
            titulo="Segurança e Defesa Civil"
            linkItems={[
              {
                id: 1,
                name: 'Registro de Roubos e Furtos',
                link: '/admin/registro_roubos',
              },
              {
                id: 2,
                name: 'Violência Doméstica',
                link: '/admin/violencia_domestica',
              },
              {
                id: 3,
                name: 'Registro de Acidentes',
                link: '/admin/registro_acidentes',
              },
            ]}
          />
          <div style={{ marginTop: '14px' }}>
            <div style={{ textAlign: 'center' }}>
              <Typography variant="h4">
                Lista de roubos e furtos registrados
              </Typography>
            </div>
            <DescriptionText>
              Lista com todos os furtos ocorridos que foram evidenciados na
              plataforma.
            </DescriptionText>
          </div>
          <div></div>
          <StyledHr />
        </TopContentContainer>
        <MidContentContainer>
          {problems.length != 0 ? (
            problems.map((problem) => (
              <AdminListCard
                source={problem.images}
                nome={problem.street}
                sobrenome={problem.referencePoint}
                descricao={problem.description}
                report={true}
                userId={problem.userId}
              />
            ))
          ) : (
            <>Sem dados no banco de dados</>
          )}
        </MidContentContainer>
      </ContentContainer>
      <Footer />
    </ContainerBase>
  );
};

export default AdminTheftRegister;
