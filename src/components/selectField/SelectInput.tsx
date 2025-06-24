import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

import "./SelectInput.scss"

interface SelectInputProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: unknown) => void;
  error?: string;
  options: { value: string; label: string }[];
}

const SelectInput = (props: SelectInputProps) => (
  <FormControl
    className="selectInput"
    required
    variant="standard"
    error={!!props.error}
    sx={{
      direction: "rtl",
      textAlign: "right",
      my: 1,
      "& label": {
        right: 0,
        left: "auto",
        color: "white",
        transformOrigin: "top right",
      },
      "& .MuiSelect-select": {
        color: "white",
        textAlign: "right",
        padding: "6px 4px",
      },
      "& .MuiSelect-icon": {
        color: "white",
        right: "auto",
        left: 0,
      },
      "& .MuiInput-underline:before": {
        borderBottom: "1px solid #ccc",
      },
      "& .MuiInput-underline:hover:before": {
        borderBottom: "1px solid #fff",
      },
      "& .MuiInput-underline:after": {
        borderBottom: "2px solid #fff",
      },
      "& .MuiFormHelperText-root": {
        direction: "rtl",
        textAlign: "right",
        color: "red",
        fontSize: "0.8rem",
      },
    }}
  >
    <InputLabel shrink htmlFor={props.name}>
      {props.label}
    </InputLabel>
    <Select
      id={props.name}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      label={props.label}
      inputProps={{ dir: "rtl" }}
      MenuProps={{
        PaperProps: {
          sx: {
            backgroundColor: "#fff",
            color: "black",
            "& .Mui-selected": {
              backgroundColor: "#d7ffff !important",
              color: "black",
            },
            "& .MuiMenuItem-root": {
              textAlign: "right",
              direction: "rtl",
            },
          },
        },
      }}
    >
      {props.options.map((opt) => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </Select>
    {props.error && <FormHelperText>{props.error}</FormHelperText>}
  </FormControl>
);

export default SelectInput;
