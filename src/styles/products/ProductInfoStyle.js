import {fade, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: "4em",
        marginBottom: "4em",
        background: "whitesmoke",
        width: "95%",
        marginLeft: "2.5%"
    },
    gridCard: {
        color: "#011b33"
    },
    media: {
        height: 201
    },
    gridColor: {
        color: "#011b33"
    },
    avatar: {
        fontSize: "2em",
        color: "rgba(6, 74, 119, 1)"
    },
    formTextField: {
        color: "#011b33"
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
        padding: "0.6em 0.9em",
        marginRight: "0.5em",
        cursor: "pointer",
        color: "white",
        background: "#ff8d06",
        '&:hover': {
            backgroundColor: fade("#ff8d06", 0.7)
        },
        float: "right"
    }
}));

export default useStyles
