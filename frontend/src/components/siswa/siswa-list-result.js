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

class SiswaListResults extends Component {  
  
    constructor() {  
      super();  
      this.state = {  
        siswa: [], // array Siswa untuk menampung data Siswa  
        nisn: "",  
        nama: "",  
        alamat: "",  
        action: "",  
        search: "",  
      }  
    }  
    
  bind = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
 
  Add = () => {
    // mengosongkan isi variabel nip, nama, dan alamat
    // set action menjadi "insert"
    this.setState({
      isOpen: true,
      nip: "",
      nama: "",
      alamat: "",
      action: "insert"
    });
  }
 
  Edit = (item) => {
    /*
    - mengisikan isi variabel nip, nama, alamat sesuai dengan data yang
    akan diedit
    - set action menjadi "update"
    */
    this.setState({
      isOpen: true,
      nip: item.nip,
      nama: item.nama,
      alamat: item.alamat,
      action: "update"
    });
  }
 
  getSiswa = () => {
    let url = "http://localhost:3001/siswa";
    // mengakses api untuk mengambil data Siswa
    axios.get(url)
    .then(response => {
      // mengisikan data dari respon API ke array Siswa
      this.setState({siswa: response.data.siswa});
    })
    .catch(error => {
      console.log(error);
    });
  }
 
  findSiswa = (event) => {
    let url = "http://localhost:3001/siswa";
    if (event.keyCode === 13) {
      // menampung data keyword pencarian
      let form = {
        find: this.state.search
      }
      // mengakses api untuk mengambil data Siswa
      // berdasarkan keyword
      axios.post(url, form)
      .then(response => {
        // mengisikan data dari respon API ke array Siswa
        this.setState({siswa: response.data.siswa});
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
 
  SaveSiswa = (event) => {
    event.preventDefault();
    /* menampung data nip, nama dan alamat dari Form
    ke dalam FormData() untuk dikirim  */
    let url = "";
    if (this.state.action === "insert") {
      url = "http://localhost:3001/siswa/save"
    } else {
      url = "http://localhost:3001/siswa/update"
    }
 
    let form = {
      nip: this.state.nip,
      nama: this.state.nama,
      alamat: this.state.alamat
    }
 
    // mengirim data ke API untuk disimpan pada database
    axios.post(url, form)
    .then(response => {
      // jika proses simpan berhasil, memanggil data yang terbaru
      this.getSiswa();
    })
    .catch(error => {
      console.log(error);
    });
    // menutup form modal
    this.setState({
      isOpen: false
    })
  }
 
  Drop = (nip) => {
    let url = "http://localhost:3001/siswa/" + nip;
    // memanggil url API untuk menghapus data pada database
    if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      axios.delete(url)
      .then(response => {
        // jika proses hapus data berhasil, memanggil data yang terbaru
        this.getSiswa();
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  Close(){
    this.setState({
        isOpen: false
    })
  }
 
  componentDidMount(){
    // method yang pertama kali dipanggil pada saat load page
    this.getSiswa()
  }
    
   handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

   handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
    render(){
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
        )
    }
};
