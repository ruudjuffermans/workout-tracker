const express = require('express');
const { configurationRoutes, optionRoutes, feedbackRoutes } = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use('/configuration', configurationRoutes);
app.use('/option', optionRoutes);
app.use('/feedback', feedbackRoutes);

app.get('/api/health', (req, res) => {
    console.log("health")
    res.json({"message":'Healthy'});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
