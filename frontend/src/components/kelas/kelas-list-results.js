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

export const KelasListResults = ({ dataKelas, ...rest }) => {
  const [selectedKelasIds, setSelectedKelasIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedKelasIds;

    if (event.target.checked) {
      newSelectedKelasIds = dataKelas.map((kelas) => kelas.id);
    } else {
      newSelectedKelasIds = [];
    }

    setSelectedKelasIds(newSelectedKelasIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedKelasIds.indexOf(id);
    let newSelectedKelasIds = [];

    if (selectedIndex === -1) {
      newSelectedKelasIds = newSelectedKelasIds.concat(selectedKelasIds, id);
    } else if (selectedIndex === 0) {
      newSelectedKelasIds = newSelectedKelasIds.concat(selectedKelasIds.slice(1));
    } else if (selectedIndex === selectedKelasIds.length - 1) {
      newSelectedKelasIds = newSelectedKelasIds.concat(selectedKelasIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedKelasIds = newSelectedKelasIds.concat(
        selectedKelasIds.slice(0, selectedIndex),
        selectedKelasIds.slice(selectedIndex + 1)
      );
    }

    setSelectedKelasIds(newSelectedKelasIds);
  };

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
                  ID Kelas
                </TableCell>
                <TableCell>
                  Nama
                </TableCell>
                <TableCell>
                  Jurusan
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataKelas.slice(0, limit).map((kelas) => (
                <TableRow
                  hover
                  key={kelas.id}
                  selected={selectedKelasIds.indexOf(kelas.id) !== -1}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={kelas.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(kelas.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {kelas.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {kelas.email}
                  </TableCell>
                  <TableCell>
                    {`${kelas.address.city}, ${kelas.address.state}, ${kelas.address.country}`}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={dataKelas.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

KelasListResults.propTypes = {
  dataKelas: PropTypes.array.isRequired
};
