import Button from '@mui/material/Button';
import MicIcon from '@mui/icons-material/Mic';

export default function BAButton(props:any){
    return (<>
    <Button sx={{paddingX:20}} startIcon={<MicIcon />} variant="outlined">test</Button>
    </>)
}