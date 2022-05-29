import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { PetugasListResults } from '../components/petugas/petugas-list-results';
import { PetugasListToolbar } from '../components/petugas/petugas-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { dataPetugas } from '../__mocks__/data-petugas';

const Petugas = () => (
  <>
    <Head>
      <title>
        Petugas
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
        <PetugasListToolbar />
        <Box sx={{ mt: 3 }}>
          <PetugasListResults dataPetugas={dataPetugas} />
        </Box>
      </Container>
    </Box>
  </>
);
Petugas.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Petugas;
