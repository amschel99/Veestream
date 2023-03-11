
import * as paypal from './utils/pay.js'
export const createOrder=async (req, res) => {
    try {
      const order = await paypal.createOrder();
      res.json(order);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }