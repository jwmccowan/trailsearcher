import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import red from '@material-ui/core/colors/red';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: teal,
    secondary: red,
  },
});
