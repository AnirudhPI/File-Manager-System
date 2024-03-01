import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { TableFooter } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

function createData(id, name, type, size, status, timeLeft, lastModified) {
  return {
    id,
    name,
    type,
    size,
    status,
    timeLeft,
    lastModified,
  };
}

const rows = [
  createData(1, 'UIUX Monster', 'Images', 745, 100, 0, '2023/08/09'),
  createData(2, '2Pac Cover', 'Musics', 3000, 80, 0, '2023/08/09'),
  createData(3, 'UIUX Monster2','Compressed', 12000, 100, 0, '2023/08/09'),
  createData(4, 'Document.pdf', 'Documents', 2000, 50, 312, '2023/08/09'),
  createData(5, 'Better.Call Saul.so2E10.720p.mp3', 'Videos', 2500000, 0, 0, '2023/08/09'),
  createData(6, 'Call of Duty.apk', 'APKs', 12000, -1, 0, '2023/08/09'),
  createData(7, '2pacCover.mp3', 'Compressed', 12000, 10, 0, 'Today'),
  createData(8, 'Mima.exe', 'Programs', 32000, 100, 0, '2023/08/09'),
  createData(9, 'Document.pdf', 'Documents', 2000, 50, 312, '2023/08/09'),
  createData(10, 'Better.Call Saul.so2E10.720p.mp3', 'Videos', 2500000, 0, 0, '2023/08/09'),
  createData(11, 'Call of Duty.apk', 'APKs', 12000, -1, 0, '2023/08/09'),
  createData(12, 'Document.pdf', 'Documents', 2000, 50, 312, '2023/08/09'),
  createData(13, 'Better.Call Saul.so2E10.720p.mp3', 'Videos', 2500000, 0, 0, '2023/08/09'),
  createData(14, 'Call of Duty.apk', 'APKs', 12000, -1, 0, '2023/08/09'),
  createData(15, 'Document.pdf', 'Documents', 2000, 50, 312, '2023/08/09'),
  createData(16, 'Better.Call Saul.so2E10.720p.mp3', 'Videos', 2500000, 0, 0, '2023/08/09'),
  createData(17, 'Call of Duty.apk', 'APKs', 12000, -1, 0, '2023/08/09'),
  createData(18, 'Document.pdf', 'Documents', 2000, 50, 312, '2023/08/09'),
  createData(19, 'Better.Call Saul.so2E10.720p.mp3', 'Videos', 2500000, 0, 0, '2023/08/09'),
  createData(20, 'Call of Duty.apk', 'APKs', 12000, -1, 0, '2023/08/09'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'size',
    numeric: true,
    disablePadding: false,
    label: 'Size',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'timeLeft',
    numeric: true,
    disablePadding: false,
    label: 'Time Left',
  },
  {
    id: 'lastModified',
    numeric: true,
    disablePadding: false,
    label: 'Last Modification',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell style={{ color: 'white' }} padding="checkbox">
          <Checkbox
          style={{ color: 'white' }}
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell     
            style={{ color: 'white'}}
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)} 
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('status');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(12);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  const handleStatus = (status) =>{
      if(status === 100){
        return "Complete"
      }
      else if(status === -1){
        return "Paused"
      }
      else{
        return status.toString() + "%";
      }
  }

  const handleTimeLeft= (d) =>{
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + " Hour " : "";
    var mDisplay = m > 0 ? m + " Min " : "";
    var sDisplay = s >= 0 ? s + " Sec" : "";
    return hDisplay + mDisplay + sDisplay; 
  }

  const handleSize = (size) =>{
    const units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   
    let l = 0, n = parseInt(size, 10) || 0;

    while(n >= 1000 && ++l){
        n = n/1000;
    }
    
    return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
  }

  return (
    <Box sx={{ width: '100%'}}>
      <Paper sx={{ width: '100%', mb: 2, bgcolor: 'rgb(15, 10, 42)'}}>
        <TableContainer component={Paper} style={{ maxHeight: '1000px', overflow: 'auto', backgroundColor: 'rgb(15, 10, 42)'}}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover = {false}
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell style={{ color: 'white' }} padding="checkbox">
                      <Checkbox
                      style={{ color: 'white' }}
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      style={{ color: 'white' }}
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell style={{ color: 'white' }} align="left">{handleSize(row.size)}</TableCell>
                    <TableCell style={{ color: 'white' }} align="left">{handleStatus(row.status)}</TableCell>
                    <TableCell style={{ color: 'white' }} align="left">{handleTimeLeft(row.timeLeft)}</TableCell>
                    <TableCell style={{ color: 'white' }} align="left">{row.lastModified}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
          <TableRow>
            <TableCell colSpan={3} style={{padding: '16px 16px 16px 4px'}}>
              <div style={{ display: 'flex', justifyContent: 'space-between' , alignItems: 'center'}}>
                <Checkbox
                style={{ color: 'white' }}
                  color="primary"
                />
                <div style={{ color: 'white', flex:'auto'}}>Select All</div>
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}