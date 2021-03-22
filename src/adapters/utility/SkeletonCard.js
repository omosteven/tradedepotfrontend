import Skeleton from '@material-ui/lab/Skeleton';

import {
    Box,
    Card,
    CardActionArea,
    Paper,
    Grid
} from '@material-ui/core';

import useStyles from "../../styles/home/BodyStyle";

const SkeletonCard = (props) => {

    const classes = useStyles();

    return (<>
        <Grid item
            xs={
                props.xs
            }
            lg={
                props.lg
            }
            md={
                props.md
        }>
            <Paper className={
                classes.paper
            }>
                <Card className={
                    classes.card
                }>
                    <CardActionArea>
                        <Skeleton variant="rect"
                            style={
                                {height: "13em"}
                            }/>

                        <Box pt={5}>
                            <Skeleton/>
                            <Skeleton width="100%"/>
                        </Box>
                    </CardActionArea>
                </Card>
            </Paper>
        </Grid>
    </>);
};

export default SkeletonCard;
