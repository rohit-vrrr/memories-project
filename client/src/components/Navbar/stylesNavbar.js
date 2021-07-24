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
        marginLeft: '20px'
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
    [theme.breakpoints.down('sm')]: {
        appBar: {
            flexDirection: 'column'
        },
        heading: {
            fontSize: '40px',
            justifyContent: 'center'
        },
        image: {
            marginLeft: '10px',
            height: '40px'
        },
        toolbar: {
            justifyContent: 'center',
            width: '300px',
            padding: 0
        },
        profile: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        purple: {
            marginRight: '15px'
        },
        userName: {
            marginRight: '15px'
        },
        button: {
            fontSize: '10px'
        }
    }
}));
