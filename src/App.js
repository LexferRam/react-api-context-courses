import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import axios from 'axios'

import './App.css';
import CardPlan from './components/CardPlan';
import { Grid } from '@mui/material'

function App() {

  const [planes, setPlanes] = useState([])

  useEffect(() => {
    (async () => {
      const { data } = await axios.post("https://segurospiramide.com/asg-api/dbo/budgets/get_budget_by_hash", { p_budget_hash: "19F0F6D179C5647A4F09DE183220A9A4" })
      console.log(data)
      setPlanes(data.p_budget_plans.plans)
    })()
  }, [])

  return (
    <Grid container>
      {planes?.map(item => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardPlan
            descplanprod={item.descplanprod}
            prima={item.prima}
            fraccionamiento={item.fraccionamiento}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default App;
