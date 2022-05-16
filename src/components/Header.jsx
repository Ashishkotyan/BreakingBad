import { AppBar, Box, makeStyles, Toolbar, InputBase } from '@material-ui/core'
import logo from '../image/logo.png';
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles({
    header: {
        background: "#000",
        padding: '10px'
    },
    image: {
        width: 100,
        

    },
    search: {
        backgroundColor: 'rgba(46, 46, 41, 1)',
        marginLeft: 400,
        borderRadius: 5,
        position:'relative',
        width:'30%'
        
    },
    InputBox:{
        color:'inherit',
        margin: '0 50px ',
        width:300,
        padding:3
    },
    searchIcon:{
        position:'absolute',
        marginLeft:10,
        padding:0,
        top: 6,
    }

})


const Header = ({getText}) => {
    const classes = useStyle();
    return (

        <AppBar className={classes.header} position="static">
            <Toolbar>
                <img className={classes.image} src={logo} alt="logo" />
                <Box  className={classes.search}>
                   <Box className ={classes.searchIcon}>
                       <SearchIcon/>
                   </Box>
                    <InputBase 
                    placeholder="Search By Name"
                    autoFocus
                    classes = {{ root: classes.InputBox }} 
                    onChange={(e) => getText(e.target.value)}

                     />

                    
                </Box>
            </Toolbar>
        </AppBar>



    )

}

export default Header;