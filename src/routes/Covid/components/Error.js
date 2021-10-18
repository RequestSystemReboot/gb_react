import { Alert, Button } from "@material-ui/core";

export const Error = ({ reload }) => (
  <div>
    <Alert severity="error">Failed to get data from API!</Alert>
    <Button variant="contained" color="primary" onClick={reload}>
      Reload
    </Button>
  </div>
);
