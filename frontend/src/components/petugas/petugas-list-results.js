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

export const PetugasListResults = ({ dataPetugas, ...rest }) => {
  const [selectedPetugasIds, setSelectedPetugasIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedPetugasIds;

    if (event.target.checked) {
      newSelectedPetugasIds = dataPetugas.map((petugas) => petugas.id);
    } else {
      newSelectedPetugasIds = [];
    }

    setSelectedPetugasIds(newSelectedPetugasIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedPetugasIds.indexOf(id);
    let newSelectedPetugasIds = [];

    if (selectedIndex === -1) {
      newSelectedPetugasIds = newSelectedPetugasIds.concat(selectedPetugasIds, id);
    } else if (selectedIndex === 0) {
      newSelectedPetugasIds = newSelectedPetugasIds.concat(selectedPetugasIds.slice(1));
    } else if (selectedIndex === selectedPetugasIds.length - 1) {
      newSelectedPetugasIds = newSelectedPetugasIds.concat(selectedPetugasIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedPetugasIds = newSelectedPetugasIds.concat(
        selectedPetugasIds.slice(0, selectedIndex),
        selectedPetugasIds.slice(selectedIndex + 1)
      );
    }

    setSelectedPetugasIds(newSelectedPetugasIds);
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
                  ID Petugas
                </TableCell>
                <TableCell>
                  Nama
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Level
                </TableCell>
                <TableCell>
                  No. Telp
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataPetugas.slice(0, limit).map((petugas) => (
                <TableRow
                  hover
                  key={petugas.id}
                  selected={selectedPetugasIds.indexOf(petugas.id) !== -1}
                >
                  <TableCell>
                    {petugas.createdAt}
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={petugas.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(petugas.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {petugas.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {petugas.email}
                  </TableCell>
                  <TableCell>
                    {`${petugas.address.city}, ${petugas.address.state}, ${petugas.address.country}`}
                  </TableCell>
                  <TableCell>
                    {petugas.phone}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={dataPetugas.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

PetugasListResults.propTypes = {
  dataPetugas: PropTypes.array.isRequired
};
