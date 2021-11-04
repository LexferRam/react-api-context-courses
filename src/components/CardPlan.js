import styled from 'styled-components'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import CompareIcon from '@mui/icons-material/Compare';

const TituloPlan = styled.h6`
    font-size: 0.8em;
    display: -webkit-box;
    overflow: hidden;
    margin-top: -40px !important;
    min-height: 38px;
    margin-bottom: 20px !important;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: #999;
    text-align: center;
`

const Moneda = styled.span`
font-weight: 400;
    line-height: 1;
    color: #777;
`
const Precio = styled.span`
    font-size: 1.28em;
    color: #3C4858;
    /* margin-top: .625rem; */
    /* min-height: auto; */
    font-weight: 700;
    /* margin-bottom: 0.75rem; */
    text-decoration: none;
`
const Fraccionamiento = styled.span`
font-size: 58%;
font-weight: 400;
    line-height: 1;
    color: #777;
`

const BotonComprar = styled(Button)`
    font-size: 0.8em;
    box-shadow: 0 2px 2px 0 rgb(252 45 34 / 14%), 0 3px 1px -2px rgb(252 45 34 / 20%), 0 1px 5px 0 rgb(252 45 34 / 12%);
    background-color: #FC2D22 !important;
    color: #FFF;
    border: none;
    cursor: pointer;
    margin: .3125rem 1px;
    padding: 12px 30px;
    position: relative;
    font-size: 12px;
    min-width: auto;
    box-shadow: 0 2px 2px 0 rgb(153 153 153 / 14%), 0 3px 1px -2px rgb(153 153 153 / 20%), 0 1px 5px 0 rgb(153 153 153 / 12%);
    min-height: auto;
    text-align: center;
    transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 400;
    line-height: 1.42857143;
    white-space: nowrap;
    will-change: box-shadow, transform;
    touch-action: manipulation;
    border-radius:30px !important;
    letter-spacing: 0;
    text-transform: uppercase;
    vertical-align: middle;
    padding: 0.9em 2.9em;
    font-size: 0.7em !important;
`

const ButtonComparar = styled(Button)`
    color: #ff9800 !important;
    border: none;
    cursor: pointer;
    font-size: 0.7em !important;

`
const ButtonVerMas = styled(Button)`
    color: #FC2D22 !important;
    border: none;
    cursor: pointer;
    font-size: 0.7em !important;
`
const ContainerButtons = styled(Grid)`
    display:flex;
    justify-content: center;
`
const CardPlan = ({ descplanprod, prima, fraccionamiento }) => {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    '& > :not(style)': {
                        m: 1,
                        width: 235,
                        height: 351,
                    },
                }}
            >

                <Paper elevation={24} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: 3
                }} >
                    <TituloPlan>{descplanprod}</TituloPlan>
                    <div style={{ minHeight: 120 }}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: "100%", alignItems: 'center', gap: 4 }}>
                            <Moneda>$</Moneda>
                            <Precio>{prima}</Precio>
                            <Fraccionamiento>/{" "}Anual</Fraccionamiento>
                        </div>

                        {fraccionamiento.map((item) => (
                            <div key={item.ideplan} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: "100%", alignItems: 'center', gap: 4 }}>
                                <Moneda>{item.codmoneda == "DL" ? '$' : null}</Moneda>
                                <Precio>{item.prima}</Precio>
                                <Fraccionamiento>/{" "}{item.nomplan}</Fraccionamiento>
                            </div>
                        ))}

                    </div>
                    <Grid container spacing={1} container >
                        <ContainerButtons item xs={12}>
                            <BotonComprar variant="contained">COTIZAR</BotonComprar>
                        </ContainerButtons>
                        <ContainerButtons item xs={12} md={6}>
                            <ButtonComparar variant="text">
                                <CompareIcon fontSize='small' />
                                COMPARAR
                            </ButtonComparar>
                        </ContainerButtons>
                        <ContainerButtons item xs={12} md={6}>
                            <ButtonVerMas variant="text">
                                <FindInPageIcon fontSize='small' />
                                VER MAS
                            </ButtonVerMas>
                        </ContainerButtons>
                    </Grid>

                </Paper>
            </Box>
        </div >
    )
}

export default CardPlan
