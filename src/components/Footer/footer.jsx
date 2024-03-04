import React from "react";

import { Container, Typography, Link, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  foot: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
    color: theme.palette.getContrastText(
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
    ),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Container
      className={classes.foot}
      style={{ background: "#000", color: "#fff" }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              &copy; {new Date().getFullYear()} Ваша Компания. Все права
              защищены.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              <Link color="inherit" href="#">
                Главная
              </Link>
              <Link color="inherit" href="#">
                О нас
              </Link>
              <Link color="inherit" href="#">
                Услуги
              </Link>
              <Link color="inherit" href="#">
                Контакты
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Footer;
