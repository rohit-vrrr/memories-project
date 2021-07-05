import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
        }
    },
    paper: {
        padding: theme.spacing(2)
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    heading: {
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 600
    },
    formTextInput: {
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 500
    },
    formFieldInput: {
        width: '97%',
        margin: '10px 0'
    },
    buttonSubmit: {
        marginTop: 10,
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 600
    },
    buttonClear: {
        marginTop: 10,
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 600
    }
}));
