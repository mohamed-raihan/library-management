import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Review() {
    return (
        <>
            <Box component={Paper} elevation={5} >
                <Card variant="outlined" style={{ width: "22rem" }} >
                    <CardContent className='p-4'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quia quasi, dignissimos aliquam labore deleniti, assumenda error accusamus recusandae, atque rem excepturi tenetur? Dolore beatae deleniti, facilis rerum cum nulla.</p>
                        <div className='d-flex gap-2'>
                            <img src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" alt="" height="75px" />
                            <div>
                                <p>Name</p>
                                <p>Destination</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default Review