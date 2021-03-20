import {fade, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: { // flexGrow: 1,
        marginTop: "1em",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto"

    },
    card: { // maxWidth: 345

    },
    cardContainer: {
        width: "50%"
    },
    media: {
        height: 200
    },
    paper: {
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "2em",
        padding: theme.spacing(0),
        // textAlign: 'center',
        color: theme.palette.text.secondary
    },
    buyBtn: {
        margin: theme.spacing(3, 0, 2),
        color: "white",
        background: "#ff8d06",
        '&:hover': {
            backgroundColor: fade("#ff8d06", 0.7)
        },
        float: "right"
    },

    iconColor: {
        color: "#ff8d06",
        '&:focus': {
            backgroundColor: fade("#ff8d06", 0.7)
        }
    }
}));

export default useStyles;
