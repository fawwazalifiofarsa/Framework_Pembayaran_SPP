import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { KelasListResults } from '../components/kelas/kelas-list-results';
import { KelasListToolbar } from '../components/kelas/kelas-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { dataKelas } from '../__mocks__/data-kelas';

const Kelas = () => (
  <>
    <Head>
      <title>
        Kelas
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
        <KelasListToolbar />
        <Box sx={{ mt: 3 }}>
          <KelasListResults dataKelas={dataKelas} />
        </Box>
      </Container>
    </Box>
  </>
);
Kelas.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Kelas;