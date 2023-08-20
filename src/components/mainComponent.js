import React, { useState,useEffect } from "react";
import Table from "../components/table";
import Footer from "../components/footer";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography} from "@material-ui/core";
import calcul from '../images/calcul.svg';
import ReactFlagsSelect from "react-flags-select";
import { Grid } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { createData } from "../components/table";
import { rows } from "../components/table";

const useStyles = makeStyles((theme) => ({
        section1 : 
        {
        width: 'auto',
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        textAlign: 'left',
        padding: '100px',
        flexWrap:"wrap",
        backgroundColor : "white",
        },

         section1_div_h1 : 
        {
            fontSize: '3.5vw',
            background: "linear-gradient(#002233, #009473)",
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor : "transparent",
            fontWeight :"bolder",
            marginBottom:"20px",
            [theme.breakpoints.down('sm')]: {
                display: '',
                },
        },

        section1_div_h3 : 
        {
        fontSize: '2vw',
        background: "linear-gradient(#002233, #009473)",
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor : "transparent",
        marginBottom:"20px",
        width : "100%",
        [theme.breakpoints.down('sm')]: {
        display: '',
        },

        whiteSpace:"nowrap",
        overflow:"hidden",
        animation : "$typing 3s, $cursor .4s step-end infinite alternate"},
        '@keyframes typing': {
        '0%': {
            width: 0,
            },
            '100%': {
            width: '100%',
            },
        },
        '@keyframes cursor': {
            '0%': {
            borderBottomWidth: 2,
            },
            '100%': {
            borderBottomWidth: 0,
            },
        },

 
  }));

const Home = () =>
{
    const [selectedCountrySend, setSelectedCountrySend] = useState("FR");
    const [selectedCountryReceive, setSelectedCountryReceive] = useState("SN");
    const [tableKey, setTableKey] = useState(0);
    const [valueToSend, setValueToSend] = useState('');
    const [valueToReceive, setValueToReceive] = useState('');
    const [focus, setFocus] = useState('none');

    const [exchangeRate,setExchangeRate]=useState(655);
    const apiKey='8ebc8df6e74f439787979c63770f44e6';

    const tauxDeChange = {
        "Wari": { taux: 656, lien: "https://www.wari.com/" },
        "Orange Money": { taux: 650, lien: "https://www.orange.sn/" },
        "MTN Mobile Money": { taux: 650, lien: "https://www.mtn.com/" },
        "MoneyGram": { taux: 655, lien: "https://www.moneygram.com/" },
        "WorldRemit": { taux: 650, lien: "https://www.worldremit.com/" },
        "Ria Money Transfer": { taux: 650, lien: "https://www.riamoneytransfer.com/" },
        "Small World": { taux: 650, lien: "https://www.smallworldfs.com/" },
        "TransferWise (Wise)": { taux: 650, lien: "https://wise.com/" },
        "Xpress Money": { taux: 650, lien: "https://www.xpressmoney.com/" },
        "Azimo": { taux: 650, lien: "https://www.azimo.com/" },
        "OFX": { taux: 645, lien: "https://www.ofx.com/" },
        "Remitly": { taux: 655, lien: "https://www.remitly.com/" },
        "Skrill": { taux: 660, lien: "https://www.skrill.com/" },
        "PayPal": { taux: 645, lien: "https://www.paypal.com/" },
        "RIA": { taux: 645, lien: "https://www.riafinancial.com/" },
        "RIA Exchange": { taux: 648, lien: "https://www.riaexchange.com/" },
        "Sendwave": { taux: 655, lien: "https://www.sendwave.com/" },
        "Western Union": { taux: 640, lien: "https://www.westernunion.com/" },
        "PaySend": { taux: 653, lien: "https://www.paysend.com/" },
        "Transfast": { taux: 648, lien: "https://www.transfast.com/" },
        "Vigo": { taux: 645, lien: "https://www.vigomoneytransfer.com/" },
        "Small World Financial Services": { taux: 650, lien: "https://www.smallworldfs.com/" }
      };

  /*  useEffect(() => {
        // Récupérer le taux de change via l'API
        fetch('https://openexchangerates.org/api/latest.json?app_id=8ebc8df6e74f439787979c63770f44e6&symbols=EUR')
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            const fcfaRate = data.rates['USD']; // XOF est le code de devise pour FCFA
            setExchangeRate(fcfaRate);
          })
          .catch((error) => {
            console.log('hello word')
            console.error('Erreur lors de la récupération du taux de change', error);
          });
      }, []);*/

    function updateTable(value)
    {
        rows.push(createData(value, 305, 3.7, 67, 4.3))
        console.log('done')
        setTableKey(prevKey => prevKey + 1);
    }

    function fillTableForSendValue(value){
        rows.length=0;
        const nomsDesOrganismes = Object.keys(tauxDeChange);
        nomsDesOrganismes.forEach((organisme) => {
        const tauxInfo = tauxDeChange[organisme];
        const sendValue=value;
        const taux = tauxInfo.taux;
        const receivedValue=(value*taux).toFixed(2);
        const lien = tauxInfo.lien;
       rows.push(createData(organisme, sendValue, receivedValue, taux, 'lien',lien))

       
        });
        setTableKey(prevKey => prevKey + 1);

    }

    function fillTableForReceivedValue(value){
        rows.length=0;
        const nomsDesOrganismes = Object.keys(tauxDeChange);
        nomsDesOrganismes.forEach((organisme) => {
        const tauxInfo = tauxDeChange[organisme];
        const receivedValue=value;
        const taux = tauxInfo.taux;
        const sendValue=(value/taux).toFixed(2);
        const lien = tauxInfo.lien;
        rows.push(createData(organisme, sendValue, receivedValue, taux, 'lien',lien))

       
        });
        setTableKey(prevKey => prevKey + 1);

    }

    function updateTableSecond(value)
    {
        rows.push(createData(value, 305, 3.7, 67, 4.3))
        console.log('done')
        setTableKey(prevKey => prevKey + 1);
    }
  
    const onSendValueChange=(event)=>{
        const newValue=event.target.value;
        setValueToSend(newValue);
        setValueToReceive((newValue*655));
        setFocus('sendFied');
        console.log(newValue);
        fillTableForSendValue(newValue);


    }

    const onReceivedValueChange=(event)=>{
        const newValue=event.target.value;
        setValueToSend((newValue/655).toFixed(2));
        setValueToReceive(newValue);
        setFocus('receivedFied');
        console.log(newValue);
        fillTableForReceivedValue(newValue)
    }

    const classes = useStyles();
    return(

        <div>

            <Box>
                 <Grid backgroundColor="#f9fafb" padding="50px" display="flex" justifyContent="center" flexDirection="column" alignContent="center" alignItems="center" gap="25px">

                            <div alignContent="center" alignItems="center">
                                <FormControl height="50px" sx={{width: { xs: '60%', md: 'auto' }}}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Montant Envoyé</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        label="Montant Envoyé"
                                        placeholder="1€"
                                        onChange={onSendValueChange}
                                        value={valueToSend}
                                        type="number"
                                        endAdornment="€"
                                    />
                                </FormControl>
                                <>
                                    <ReactFlagsSelect
                                    selected={selectedCountrySend}
                                    searchable={false}
                                    onSelect={(code) => setSelectedCountrySend(code) & updateTable(code)}
                                    showOptionLabel={true}
                                    showSelectedLabel={false}
                                    showSecondaryOptionLabel={false}
                                    showSecondarySelectedLabel={false}
                                    optionsSize={16}
                                    selectedSize={30}
                                    fullWidth={false}
                                    alignOptionsToRight={true}
                                    countries={["IT", "FR", "ES"]}
                                />
                                </>
                            </div>

                            <div alignContent="center" alignItems="center">
                                <FormControl height="50px" sx={{ width: { xs: '60%', md: 'auto' }}}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Montant Reçu</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        label="Montant Reçu"
                                        placeholder={(exchangeRate).toFixed(2)}
                                        onChange={onReceivedValueChange}

                                        value={valueToReceive}
                                        type="number"
                                        endAdornment="FCFA"
                                    />
                                </FormControl>
                                <>
                                    <ReactFlagsSelect
                                        selected={selectedCountryReceive}
                                        onSelect={(code) => setSelectedCountryReceive(code) & updateTableSecond(code)}
                                        showOptionLabel={true}
                                        showSelectedLabel={false}
                                        showSecondaryOptionLabel={false}
                                        showSecondarySelectedLabel={false}
                                        optionsSize={16}
                                        selectedSize={30}
                                        fullWidth={false}
                                        alignOptionsToRight={true}
                                        countries={["ML", "MR", "SN", "CM"]}
                                    />
                                </>
                            </div>

                    </Grid>
                    <p style={{textAlign:"center"}}>Le taux d'échange par défaut et de 1€ pour {exchangeRate}FCFA.</p>


                    <Table key={tableKey}/>

                    <Grid className={classes.section1}>

                        <img src={`${calcul}`} height="300px" width="350px" alt="svg medecin"/>

                        <Box>
                            
                            <Typography variant="h1" className={classes.section1_div_h1}>Votre Meilleur Taux de Change Avec Nous !</Typography>

                            <Typography variant="h3" className={classes.section1_div_h3}>Naviguez les Devises en Toute Confiance : Votre Destination pour les Taux de Change Optimaux !</Typography>

                            <Typography variant="h3" className={classes.section1_div_h3}>Économisez en Chaque Envoi : Trouvez le Juste Équilibre avec nos Taux de Change Comparez !</Typography>

                        </Box>


                    </Grid>

                <Box>
                    
                </Box>
            </Box>

            <Footer/>
        </div>
    );
};

export default Home;