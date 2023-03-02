export const validateApiKey = async (req, res, next) => {
    const {apikey} = req.headers
   
    try{

   
  
        if (!apikey) {
          return res.status(400).json({error: 'No API key provided'});
        }
      
        //if (!model.findOne({apiKey: clientKey})) {
        //  return res.status(403).json({error: 'Invalid API key'});
       // }
      req.apikey=apikey
        next();
    }
    catch(error){
res.status(500).send(error.message)
    }
    
  }