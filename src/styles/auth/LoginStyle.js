import {fade, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(10),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(3),
        backgroundColor: "#ff8d06",
        color: "white"
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        background: "#ff8d06",
        '&:hover': {
            backgroundColor: fade("#ff8d06", 0.7)
        }
    }
}));

export default useStyles;
