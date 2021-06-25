//Complete all necessary imports for the page
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


/**
 * 
 * @param {*} param0 
 * @returns 
 */
export default function BreadCard(props) {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();

  return (
    <div>
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.product?.productName}
        </Typography>
        <Typography>
          {props.product?.productDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Add
      </Button>
      </CardActions>
    </Card>
    </div>
  );
}