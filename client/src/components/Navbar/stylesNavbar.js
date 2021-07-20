import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px'
    },
    heading: {
        color: '#e3e8ec',
        textDecoration: 'none',
        fontFamily: "'Kalam', cursive",
        fontWeight: 700
    },
    image: {
        marginLeft: '15px'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px'
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '350px'
    },
    userName: {
        display: 'flex',
        alignItems: 'center'
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500]
    },
}));
