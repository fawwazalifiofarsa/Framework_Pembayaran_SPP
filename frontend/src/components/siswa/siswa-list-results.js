import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';
import { axios } from 'axios';

export const SiswaListResults = ({ dataSiswa, ...rest }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  
  const data = {  
    siswa: [], // array pegawai untuk menampung data pegawai  
    nisn: "",  
    nama: "",  
    kelas: "",
    alamat: "", 
    no_telp: "", 
    action: "",  
    search: "",  
  }  

  const getPegawai = () => {
    let url = "http://localhost:3001/pegawai";
    // mengakses api untuk mengambil data pegawai
    axios.get(url)
    .then(response => {
      // mengisikan data dari respon API ke array pegawai
      this.setState({pegawai: response.data.pegawai});
    })
    .catch(error => {
      console.log(error);
    });
  }

  const findPegawai = (event) => {
    let url = "http://localhost:3001/pegawai";
    if (event.keyCode === 13) {
      // menampung data keyword pencarian
      let form = {
        find: this.state.search
      }
      // mengakses api untuk mengambil data pegawai
      // berdasarkan keyword
      axios.post(url, form)
      .then(response => {
        // mengisikan data dari respon API ke array pegawai
        this.setState({pegawai: response.data.pegawai});
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  NISN
                </TableCell>
                <TableCell>
                  Nama
                </TableCell>
                <TableCell>
                  Kelas
                </TableCell>
                <TableCell>
                  Alamat
                </TableCell>
                <TableCell>
                  No. Telp
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataSiswa.slice(0, limit).map((siswa) => (
                <TableRow>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={siswa.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(siswa.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {siswa.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {siswa.email}
                  </TableCell>
                  <TableCell>
                    {`${siswa.address.city}, ${siswa.address.state}, ${siswa.address.country}`}
                  </TableCell>
                  <TableCell>
                    {siswa.phone}
                  </TableCell>
                  <TableCell>
                    {format(siswa.createdAt, 'dd/MM/yyyy')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={dataSiswa.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};
