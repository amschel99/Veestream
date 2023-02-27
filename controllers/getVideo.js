import path from 'path'
import fs from 'fs'

 export const getVideo= async (req,res)=>{
    try{





        //check if API key isvalid 
        const video= path.resolve(`./assets/${req.params.id}.mp4`)
        fs.stat(video,(err,stats)=>{
            if(err){
                console.log(err)
            }
            else{
                //here we have succesfully read our file

                console.log(stats)
                const range = req.headers.range;
if (!range) {
    console.log("no range")
return res.sendStatus(416);
}
console.log(range)
//chunk logic
const positions = range.replace(/bytes=/, "").split("-");
const start = parseInt(positions[0], 10);
const total = stats.size;
const end = positions[1] ? parseInt(positions[1], 10) : total - 1;
const chunksize = (end - start) + 1;

res.writeHead(206, {
    'Transfer-Encoding': 'chunked',
    "Content-Range": "bytes " + start + "-" + end + "/" + total,
    "Accept-Ranges": "bytes",
    "Content-Length": chunksize,
    "Content-Type": 'video/mp4'
    });
    const stream = fs.createReadStream(video, { start: start, end: end, autoClose: true
    }).on('end', function () {
        console.log('Stream Done');
        })
        .on("error", function (err) {
        res.end(err);}).pipe(res, { end: true });
    


            }
        })
    }
    catch(e){
console.log(`an error occured`)
    }
}

