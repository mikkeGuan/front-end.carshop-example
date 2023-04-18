import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { DialogTitle } from "@mui/material";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function AddCar({ addCar }) {
  const [open, setOpen] = React.useState(false);
  const [car, setCar] = React.useState({
    brand: "",
    model: "",
    color: "",
    fuel: "",
    year: "",
    price: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const saveCar = () => {
    addCar(car);
    setCar({...car, brand: ""});
    setCar({...car, model: ""});
    setCar({...car, color: ""});
    setCar({...car, fuel: ""});
    setCar({...car, year: ""});
    setCar({...car, price: ""});

    setOpen(false);
  };

  const handleClose = (event, reason) => {
    if(reason !== 'backdropClick'){
    setOpen(false);
    }
  };


  const inputChanged = (event) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Button onClick={handleClickOpen} variant="outlined">
        Add car
      </Button>

      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Add Car</DialogTitle>
        <DialogContent>
          <TextField
            name="brand"
            autoFocus={true}
            value={car.brand}
            onChange={inputChanged}
            margin="dense"
            label="Brand"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            name="model"
            autoFocus={true}
            value={car.model}
            onChange={inputChanged}
            margin="dense"
            label="Model"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            name="color"
            autoFocus={true}
            value={car.color}
            onChange={inputChanged}
            margin="dense"
            label="Color"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            name="fuel"
            autoFocus={true}
            value={car.fuel}
            onChange={inputChanged}
            margin="dense"
            label="Fuel"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            name="year"
            autoFocus={true}
            value={car.year}
            onChange={inputChanged}
            margin="dense"
            label="Year"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            name="price"
            autoFocus={true}
            value={car.price}
            onChange={inputChanged}
            margin="dense"
            label="Price"
            fullWidth={true}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={saveCar}>Save</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
