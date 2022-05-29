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

export const SppListResults = ({ dataSpp, ...rest }) => {
  const [selectedSppIds, setSelectedSppIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedSppIds;

    if (event.target.checked) {
      newSelectedSppIds = dataSpp.map((spp) => spp.id);
    } else {
      newSelectedSppIds = [];
    }

    setSelectedSppIds(newSelectedSppIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedSppIds.indexOf(id);
    let newSelectedSppIds = [];

    if (selectedIndex === -1) {
      newSelectedSppIds = newSelectedSppIds.concat(selectedSppIds, id);
    } else if (selectedIndex === 0) {
      newSelectedSppIds = newSelectedSppIds.concat(selectedSppIds.slice(1));
    } else if (selectedIndex === selectedSppIds.length - 1) {
      newSelectedSppIds = newSelectedSppIds.concat(selectedSppIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedSppIds = newSelectedSppIds.concat(
        selectedSppIds.slice(0, selectedIndex),
        selectedSppIds.slice(selectedIndex + 1)
      );
    }

    setSelectedSppIds(newSelectedSppIds);
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
              {dataSpp.slice(0, limit).map((spp) => (
                <TableRow
                  hover
                  key={spp.id}
                  selected={selectedSppIds.indexOf(spp.id) !== -1}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={spp.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(spp.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {spp.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {spp.email}
                  </TableCell>
                  <TableCell>
                    {`${spp.address.city}, ${spp.address.state}, ${spp.address.country}`}
                  </TableCell>
                  <TableCell>
                    {spp.phone}
                  </TableCell>
                  <TableCell>
                    {format(spp.createdAt, 'dd/MM/yyyy')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={dataSpp.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

SppListResults.propTypes = {
  dataSpp: PropTypes.array.isRequired
};