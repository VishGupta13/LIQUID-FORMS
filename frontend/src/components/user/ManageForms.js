import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {


    

  const navigate = useNavigate();

  const prod1 =
    "https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp";
  const prod2 =
    "https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp";
  // const prod3 = "https://www.iimshillong.ac.in/wp-content/uploads/2022/02/Garena-Free-fire-APK-Download.jpeg";
  // const prod4 =
  //   "https://www.gamerevolution.com/assets/uploads/2021/11/Is-Clash-of-Clans-being-removed-from-iPhone-and-Android-1280x720.jpg";

  return (
    <Paper sx={{ height: "20vh" }}>
      {/* <header className="bg-light">
        <Container sx={{ padding: "5rem 0" }}>
          <TextField
            // className="w-100"
            sx={{ width: "100%" }}
            label="Explore"
            placeholder="Search Your Product..."
          />
        </Container>
      </header> */}
      <section>
        {/* <div className="row">
          <div className="col-md-3"></div>
        </div>

        <div className="card"></div> */}

        {/* container - row, item - column */}

        <Container maxWidth="xl" className="mt-5">
          <Grid container spacing={5}>
            <Grid item md={3} sm={3} xs={12}>
              <Card>
                <CardMedia component="img" image={prod1} height={180} />
                <CardContent>
                  <Typography variant="h5">
                    <h1>Theme 1</h1>
                  </Typography>
                  <Typography className="text-muted" variant="caption">
                    Description 1
                  </Typography>
                  <Typography className="mt-4" variant="h4">
                    12345
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sm={3} xs={12}>
              <Card>
                <CardMedia component="img" image={prod2} height={180} />

                <CardContent>
                <Typography variant="h5">
                <h1>Theme 2</h1>
                  </Typography>
                  <Typography className="text-muted" variant="caption">
                   Description 2
                  </Typography>
                  <Typography className="mt-4" variant="h4">
                    112233
                  </Typography>
                  {/* <Button
                  variant= "outlined"
                  onClick={() => navigate("/gallery")}
                  > 
                  Go To Gallery
                  </ Button> */}
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sm={3} xs={12}>
              <Card>
                {/* <CardMedia component="img" image={prod3} height={180} /> */}

                <CardContent>
                <Typography variant="h5">
                  Card 3
                  </Typography>
                  <Typography className="text-muted" variant="caption">
                  Description 3
                  </Typography>
                  <Typography className="mt-4" variant="h4">
                    554477
                  </Typography>
               </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sm={3} xs={12}>
              <Card>
                {/* <CardMedia component="img" image={prod4} height={180} /> */}

                <CardContent>
                <Typography variant="h5">
                  Card 4
                  </Typography>
                  <Typography className="text-muted" variant="caption">
                  Description 4
                  </Typography>
                  <Typography className="mt-4" variant="h4">
                    778899
                  </Typography>
                  {/* <Button
                  variant= "outlined"
                  onClick={() => navigate("/gallery")}
                  > 
                  </Button> */}
                  {/* <Button 
                  variant= "öutlined" 
                  onClick={() => navigate("/gallery")}
                  >
                    Go to gallery
                  </Button> */}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Paper>
  );
};

export default ProductList;