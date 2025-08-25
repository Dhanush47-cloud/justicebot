const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/webhook', async (req, res) => {
  const email = req.body.queryResult.parameters.email;
  const grievance = req.body.queryResult.parameters.grievance;

  // Send to Relay webhook
  await axios.post('https://hooks.relay.app/your-relay-url', {
    email: email,
    grievance: grievance
  });

  res.json({
    fulfillmentText: `Thanks! Your grievance has been recorded. Confirmation sent to ${email}.`
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
