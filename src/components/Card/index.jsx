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
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function example({ title, subTitle, content, image }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={title} subheader={subTitle} />
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
