import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { PembayaranListResults } from '../components/pembayaran/pembayaran-list-results';
import { PembayaranListToolbar } from '../components/pembayaran/pembayaran-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { dataPembayaran } from '../__mocks__/data-pembayaran.js';

const Pembayaran = () => (
  <>
    <Head>
      <title>
        Pembayaran
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
        <PembayaranListToolbar />
        <Box sx={{ mt: 3 }}>
          <PembayaranListResults dataPembayaran={dataPembayaran} />
        </Box>
      </Container>
    </Box>
  </>
);
Pembayaran.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Pembayaran;
