const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = function billingRoutes(app) {
  app.post("/api/stripe", async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      source: req.body.id, // obtained with Stripe.js
      description: "Charge for 5 credits"
    });
  });
};
