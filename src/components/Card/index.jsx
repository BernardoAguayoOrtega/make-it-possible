// make styles from material
import { makeStyles } from '@material-ui/core/styles';
// import material ui
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core/';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '35vw',
    minWidth: '35vw',
    margin: '1rem auto',
    background: 'black',
    color: 'white',
  },
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
    <Card className={classes.root}>
      <CardHeader title={title} />
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent className={classes.content}>
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
