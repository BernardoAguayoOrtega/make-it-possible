// make styles from material
import { makeStyles } from '@material-ui/core/styles';
// import material ui
import {
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core/';
// import styled components
import { CardContainer } from './styledComponents';

const useStyles = makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  content: {
    color: 'white',
  },
}));

export default function example({ title, subTitle, content, image }) {
  const classes = useStyles();

  return (
    <CardContainer>
      <CardHeader title={title} />
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent className={classes.content}>
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
    </CardContainer>
  );
}
