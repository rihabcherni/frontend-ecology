import React, { useState, useMemo, useCallback, useEffect , useRef} from 'react';
  import { AgGridReact } from 'ag-grid-react';
  import 'ag-grid-community/dist/styles/ag-grid.css';
  import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
  import Button  from '@mui/material/Button';
  import Grid from '@mui/material/Grid';
  import DeleteIcon from '@mui/icons-material/Delete';
  import EditIcon from '@mui/icons-material/Edit';
  import AddIcon from '@mui/icons-material/Add';
  import FileDownloadIcon from '@mui/icons-material/FileDownload';
  import ManageSearchIcon from '@mui/icons-material/ManageSearch';
  import DialogDetailCommandeDechet from './DialogDetailCommandeDechet';
  import {Item} from '../../../../components/Item'

  const initialValue = { id_commande_dechet:"", id_dechet:"", quantite:"",created_at:"", updated_at:""}
  export default function DetailCommandeDechet() {
    const gridRef = useRef();
    const rowHeight = 50;
    const defaultColDef = useMemo(() => {
      return {
        resizable: true,sortable: true, flex: 1, filter: true 
      };
    }, []);
    const [gridApi, setGridApi] = useState(null)
    const [tableData, setTableData] = useState(null)
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState(initialValue)
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setFormData(initialValue)
    };
    const url = `http://127.0.0.1:8000/api/detail-commande-dechets`
    const columnDefs = [
      { headerName: "id", field: "id" ,headerCheckboxSelection: true,headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true},
      { headerName: "id commande_dechet", field: "id_commande_dechet"},
      { headerName: "id_dechet", field: "id_dechet"},
      { headerName: "quantite", field: "quantite"},
      { headerName: "date de creation ", field: "created_at", type: ['dateColumn', 'nonEditableColumn']},
      { headerName: "date màj", field: "updated_at", type: ['dateColumn', 'nonEditableColumn']},
      {
        headerName: "Actions", field: "id" ,filter: false, cellRenderer: (params) => <div>
          <Button variant="outlined" color="primary" onClick={() => handleUpdate(params.data)} style={{marginRight:"5px"}}><EditIcon/></Button>
          <Button variant="outlined" color="error" onClick={() => handleDelete(params.value)}><DeleteIcon/></Button>
        </div>
      }
    ]
    const columnTypes = useMemo(() => {
      return {
        numberColumn: { width: 130, filter: 'agNumberColumnFilter' },
        medalColumn: { width: 100, columnGroupShow: 'open', filter: false },
        nonEditableColumn: { editable: false },
        dateColumn: {
          // specify we want to use the date filter
          filter: 'agDateColumnFilter',
          // add extra parameters for the date filter
          filterParams: {
            // provide comparator function
            comparator: (filterLocalDateAtMidnight, cellValue) => {
              // In the example application, dates are stored as dd/mm/yyyy
              // We create a Date object for comparison against the filter date
              const dateParts = cellValue.split('/');
              const day = Number(dateParts[0]);
              const month = Number(dateParts[1]) - 1;
              const year = Number(dateParts[2]);
              const cellDate = new Date(year, month, day);
              // Now that both parameters are Date objects, we can compare
              if (cellDate < filterLocalDateAtMidnight) {
                return -1;
              } else if (cellDate > filterLocalDateAtMidnight) {
                return 1;
              } else {
                return 0;
              }
            },
          },
        },
      };
    }, []);
    // calling getUsers function for first time 
    useEffect(() => {
      getData()
    }, [])
    //fetching user data from server
    const getData = () => {
      fetch(url).then(resp => resp.json()).then(resp => setTableData(resp.data))
    }
    const onChange = (e) => {
      const { value, id } = e.target
      setFormData({ ...formData, [id]: value })
    }
    const onGridReady = (params) => {
      setGridApi(params)
    }
    // setting update row data to form data and opening pop up window
    const handleUpdate = (oldData) => {
      setFormData(oldData)
      handleClickOpen()
    }
    //deleting a user
    const handleDelete = (id) => {
      const confirm = window.confirm("Êtes-vous sûr de vouloir supprimer cette ligne", id)
      if (confirm) {
        fetch(url + `/${id}`, { method: "DELETE" }).then(resp => resp.json()).then(resp => getData())
  
      }
    }
    const handleFormSubmit = () => {
      if (formData.id) {
        //updating a user 
        const confirm = window.confirm("Êtes-vous sûr de vouloir mettre à jour cette ligne?")
        confirm && fetch(url + `/${formData.id}`, {
          method: "PUT", body: JSON.stringify(formData), headers: {
            'content-type': "application/json"
          }
        }).then(resp => resp.json())
          .then(resp => {
            handleClose()
            getData()
  
          })
      } else {
        // adding new user
        fetch(url, {
          method: "POST", body: JSON.stringify(formData), headers: {
            'content-type': "application/json"
          }
        }).then(resp => resp.json())
          .then(resp => {
            handleClose()
            getData()
          })
      }
    }
    const onBtnExport = useCallback(() => {
      gridRef.current.api.exportDataAsCsv();
    }, []);
    const onQuickFilterChanged = useCallback(() => {
      gridRef.current.api.setQuickFilter(
        document.getElementById('quickFilter').value
      );
    }, []);
    const onPaginationChange=(pageSize)=>{
      gridApi.api.paginationSetPageSize(Number(pageSize))
    }
  
    return (
      <div   style={{width:"94%" ,paddingLeft:"3%"}}>
      <h2 align="center">details commandes dechets</h2>
  
        <Grid  container direction="row" justifyContent="space-between" alignItems="flex-start" >
            <Item style={{marginBottom:'8px' }}>
                  <ManageSearchIcon variant="contained" color="success"  style={{marginBottom:"-7px"}} />
                  <input type="text"  onInput={onQuickFilterChanged}  id="quickFilter"  placeholder="recherche..."  style={{backgroundColor:'#DCDCDC', border:'none',padding:"8px" }}/>
            </Item>
            <Item>
                    <select style={{marginRight:'5px' , padding:"10px" , borderRadius:"5px",border:"none"}} onChange={(e)=>onPaginationChange(e.target.value)}>
                      <option value='5'>5</option>
                      <option value='25'>25</option>
                      <option value='50'>50</option>
                      <option value='100'>100</option>
                    </select>
                  <Button variant="contained" color="primary" onClick={onBtnExport} style={{marginRight:"8px"}}><FileDownloadIcon/></Button>
                  <Button variant="contained" color="success" onClick={handleClickOpen}><AddIcon/></Button>
            </Item>
           
        </Grid>
        <div className="ag-theme-alpine" style={{ height: '350px'}}>
          <AgGridReact
          ref={gridRef}
          rowData={tableData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          columnTypes={columnTypes}
          rowHeight={rowHeight}
          pagination={true}
          paginationPageSize={5}
          />
        </div>
        <DialogDetailCommandeDechet open={open} handleClose={handleClose}
          data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
      </div>
    );
  }
  