import { createMuiTheme } from '@material-ui/core/styles';

const theme = (props: {mode: 'light' | 'dark' | undefined}) => {
  return createMuiTheme({
    palette: {
      type: props.mode
    },
  })
};

export default theme;