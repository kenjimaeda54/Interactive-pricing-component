import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

export const PurpleSwitch = withStyles({
  switchBase: {
    color: grey[300],
    '&$checked': {
      color: blue[500],
    },
    '&$checked + $track': {
      backgroundColor: blue[500],
    },
  },
  checked: {},
  track: {},
})(Switch);
