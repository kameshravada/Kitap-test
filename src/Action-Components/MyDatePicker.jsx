import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField } from "@mui/material";

export default function WhiteDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Pick a date"
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              style: {
                color: "white", // Input text color
              },
            }}
            InputLabelProps={{
              style: {
                color: "white", // Label color
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white", // Default border
                },
                "&:hover fieldset": {
                  borderColor: "white", // Hover border
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white", // Focused border
                },
              },
              "& .MuiInputBase-input::placeholder": {
                color: "white", // Placeholder color
                opacity: 1,
              },
              "& .MuiSvgIcon-root": {
                color: "white", // Calendar icon color
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}
