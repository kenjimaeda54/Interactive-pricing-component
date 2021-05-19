import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

export const SliderBlue = withStyles({
  thumb: {
    color: blue[300],
    height: 15,
  },
  //track estilo aplicado no campo selecionado
  track: {
    color: blue[100],
  },
  rail: {
    color: grey[500],
  },
  mark: {
    color: red[800],
  },
})(Slider);
