import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    copyright: {
        position: 'fixed',
        width: '100%',
        fontSize: '18px',
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: '400',
        bottom: '5px',
        right: '25%',
        left: '50%'
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: 'column-reverse'
        },
        copyright: {
            fontSize: '15px',
            left: '37%'
        }
    }
}));
