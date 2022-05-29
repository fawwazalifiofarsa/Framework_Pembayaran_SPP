import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { SppListResults } from '../components/spp/spp-list-results';
import { SppListToolbar } from '../components/spp/spp-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { dataSpp } from '../__mocks__/data-spp';

const Spp = () => (
  <>
    <Head>
      <title>
        Spp
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <SppListToolbar />
        <Box sx={{ mt: 3 }}>
          <SppListResults dataSpp={dataSpp} />
        </Box>
      </Container>
    </Box>
  </>
);
Spp.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Spp;
