import MiniCard from '../../../../components/mini-card';

const MiniCardRemoteSensing = () => {
  return (
    <MiniCard
      source="/assets/img/home_administracao_publica.png"
      titulo="Administração Pública"
      linkItems={[
        {
          id: 1,
          name: 'Monitoramento do Guardinha',
          link: '/admin/monitoramento_guardinha',
        },
        {
          id: 2,
          name: 'Monitoramento do Trânsito',
          link: '/admin/monitoramento_pessoas_veiculos',
        },
      ]}
    />
  );
};

export default MiniCardRemoteSensing;
