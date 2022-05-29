import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { SiswaListResults } from '../components/siswa/siswa-list-results';
import { SiswaListToolbar } from '../components/siswa/siswa-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { dataSiswa } from '../__mocks__/data-siswa';

const Siswa = () => (
  <>
    <Head>
      <title>
        Siswa
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
        <SiswaListToolbar />
        <Box sx={{ mt: 3 }}>
          <SiswaListResults dataSiswa={dataSiswa} />
        </Box>
      </Container>
    </Box>
  </>
);
Siswa.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Siswa;
