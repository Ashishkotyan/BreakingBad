import { Card , makeStyles, Tooltip, Typography} from '@material-ui/core';


const useStyle =  makeStyles({
    img:{
        
        height:300,
        width:'100%',
        objectFit:'contain',
        
        
    }
})

const Character = ({ item }) =>{

    console.log(item)
    const classes = useStyle();
    return(
        <Card style={{backgroundColor:'rgba(84, 84, 68, 0.1)'}}>
        <Tooltip title={
            <>
            <Typography>Name: {item.name}</Typography>
            <Typography>Real Name: {item.portrayed}</Typography>
            <Typography>Nickname: {item.nickname}</Typography>
             <Typography>Date of Birth: {item.birthday}</Typography>
            <Typography>occupation: {item.occupation}</Typography>
            <Typography>Status: {item.status}</Typography>            
        
            </>
        } arrow placement="top">
            <img src={item.img} className={classes.img} alt = 'Character'/>
            </Tooltip>
        </Card>
    )


}

export default Character;