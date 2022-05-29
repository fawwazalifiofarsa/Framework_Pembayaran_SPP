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

export const PembayaranListResults = ({ dataPembayaran, ...rest }) => {
  const [selectedPembayaranIds, setSelectedPembayaranIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedPembayaranIds;

    if (event.target.checked) {
      newSelectedPembayaranIds = dataPembayaran.map((pembayaran) => pembayaran.id);
    } else {
      newSelectedPembayaranIds = [];
    }

    setSelectedPembayaranIds(newSelectedPembayaranIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedPembayaranIds.indexOf(id);
    let newSelectedPembayaranIds = [];

    if (selectedIndex === -1) {
      newSelectedPembayaranIds = newSelectedPembayaranIds.concat(selectedPembayaranIds, id);
    } else if (selectedIndex === 0) {
      newSelectedPembayaranIds = newSelectedPembayaranIds.concat(selectedPembayaranIds.slice(1));
    } else if (selectedIndex === selectedPembayaranIds.length - 1) {
      newSelectedPembayaranIds = newSelectedPembayaranIds.concat(selectedPembayaranIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedPembayaranIds = newSelectedPembayaranIds.concat(
        selectedPembayaranIds.slice(0, selectedIndex),
        selectedPembayaranIds.slice(selectedIndex + 1)
      );
    }

    setSelectedPembayaranIds(newSelectedPembayaranIds);
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
                  ID pembayaran
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
              {dataPembayaran.slice(0, limit).map((pembayaran) => (
                <TableRow
                  hover
                  key={pembayaran.id}
                  selected={selectedPembayaranIds.indexOf(pembayaran.id) !== -1}
                >
                  <TableCell>
                    {pembayaran.createdAt}
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={pembayaran.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(pembayaran.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {pembayaran.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {pembayaran.email}
                  </TableCell>
                  <TableCell>
                    {`${pembayaran.address.city}, ${pembayaran.address.state}, ${pembayaran.address.country}`}
                  </TableCell>
                  <TableCell>
                    {pembayaran.phone}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={dataPembayaran.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

PembayaranListResults.propTypes = {
  dataPembayaran: PropTypes.array.isRequired
};
