import React from "react";
import { Dialog, DialogActions, DialogContent, TextField } from "@mui/material";
import { Button } from "@mui/material";
import {DialogTitle} from "@mui/material";

export default function EditCar({ updateCar, params }) {
  const [open, setOpen] = React.useState(false);
  const [car, setCar] = React.useState({
    brand: "",
    model: "",
    color: "",
    fuel: "",
    year: "",
    price: "",
  });

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
    setCar({

        brand: params.data.brand,
        model: params.data.model,
        color: params.data.color,
        fuel: params.data.color,
        year: params.data.year,
        price: params.data.price

    }


    )
  };

  const handleSave = () => {
    console.log("Tallennus");
    updateCar(car, params.value)
  };

  const inputChanged = (event) => {
    setCar({...car, [event.target.name]: event.target.value}) 

    
  }
  return (
    <div>
        <Button onClick={handleClickOpen} variant="outlined">
        Edit car
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Edit Car</DialogTitle>
        <DialogContent>
        <TextField
            name="brand"
            autoFocus={true}
            onChange={inputChanged}
            margin="dense"
            label="Brand"
            fullWidth={true}
            variant="standard"
            value={car.brand}
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
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={handleClose}>Cancel</Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}
