import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Books() {
    return (
        <>
            <Box  component={Paper} elevation={15} >
                <Card variant="outlined" style={{ width: "18vw" }} >
                    <div className='d-flex justify-content-center align-items-center p-3'>
                        <img src="https://offtheshelf.b-cdn.net/app/uploads/2019/12/Normal-People.jpg" height="250px" width="100%" alt="" />
                    </div>
                    <CardContent className='p-3'>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="books-card-content">Book name</p>
                            <p className="text-success books-card-content ">Price</p>
                        </div>
                        <div>
                            <p className="books-card-content">Author Name</p>
                        </div>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default Books