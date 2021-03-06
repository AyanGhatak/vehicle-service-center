import { Autocomplete, Box, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import centers from './centers';

export default function ServiceModePicker() {
    return (
      <Box>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Would you like to drive to the workshop or request a pickup?</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label="Self Drive" />
                <FormControlLabel value="other" control={<Radio />} label="Pick up" />
            </RadioGroup>
            <Box>Select the services needed</Box>
            {
              centers[0].servicesOffered.map(service => {
                const text = `${service.name}, Price: Rs. ${service.price}`
                return (
                  <>
                    <FormControlLabel control={<Checkbox />} label={text} />
                  </>
                )
              })
            }
        </FormControl>
      </Box>
    );
  }