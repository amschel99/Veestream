
import * as paypal from './utils/pay.js'
export const captureOrder= async (req,res,next)=>{
    const { orderID } = req.body;
    try {
      const captureData = await paypal.capturePayment(orderID);
      req.order=captureData
   next()
    } catch (err) {
      res.status(500).send(err.message);
    }
}