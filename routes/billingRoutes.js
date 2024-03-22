const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripePrivateKey);
const requireLogin = require('../middlewares/requireLogin');
module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => { //app.methods take arbitary number of arguements, the arguements between route url and last function will be automatically setup as middleware by express 
    const paymentMethod = await stripe.paymentMethods.create({
      type: 'card',
      card: {
        token: req.body.id,
      },
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 600, // amount in the smallest currency unit (e.g., 100 paise = 1 rupees)
      currency: 'inr', // Indian Rupees
      payment_method_types: ['card'],
      description: 'Payment for your product or service',
      payment_method: paymentMethod.id
    });
    req.user.credits += 6; //passport has created this user property by default  
    const user = await req.user.save();
    res.send(user);
  });
};

