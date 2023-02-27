export const validateApiKey = async (req, res, next) => {
    const clientKey = req.query.apiKey;
    try{

   
  
        if (!clientKey) {
          return res.status(400).json({error: 'No API key provided'});
        }
      
        //if (!model.findOne({apiKey: clientKey})) {
        //  return res.status(403).json({error: 'Invalid API key'});
       // }
      req.apiKey=clientKey;
        next();
    }
    catch(error){
res.status(500).send(error.message)
    }
    
  }