import React from "react";
import Footer from "../components/footer";
import transfert from '../images/transfert.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
          section: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding: "50px",
    backgroundColor: "#f9fafb",
  },
  imageBox: {
    flex: "1 1 50%", // Adjust the width of the image box as needed
    padding: "20px",
    textAlign: "center",
  },
  textBox: {
    flex: "1 1 50%", // Adjust the width of the text box as needed
    padding: "20px",
  },
  image: {
    maxWidth: "500px",
    maxHeight: "300px",
    borderRadius: "10px",
  },

 
  }));

const About = () =>
{

    const classes = useStyles();

    return(

        <div>
            <section className={classes.section}>
        <Box className={classes.imageBox}>
          <img
            src={`${transfert}`}
            alt="Mission"
            className={classes.image}
          />
        </Box>
        <Box className={classes.textBox}>
          <Typography variant="h3"style={{marginBottom:"20px"}}>Qu'est ce que Rate Radar</Typography>
          <Typography variant="body1">
          Nous comprenons que chaque centime compte, surtout lorsque vous effectuez des envois d'argent à l'étranger. C'est pourquoi nous mettons à votre disposition un outil puissant qui vous permet de comparer rapidement et facilement les taux de change offerts par divers organismes de transfert d'argent. Vous pouvez maintenant dire adieu aux devinettes et aux suppositions lorsqu'il s'agit de choisir la meilleure option pour vos transferts.
          </Typography>
        </Box>
      </section>
            <Footer/>
        </div>
    );
};

export default About;