
 export const videos=[
    {
    id:0,
    poster:'/video/0/poster',
    gif:'/video/0/gif',
    duration:'0min',
    name:'thread of execution'
    },
    {
        id:1,
        poster:'/video/1/poster',
        gif:'/video/1/gif',
        duration:'0min',
        name:'callbacks'
        },
        {
            id:2,
            poster:'/video/2/poster',
            gif:'/video/2/gif',
            duration:'0min',
            name:'high order functions'
            },
            {
                id:3,
                poster:'/video/3/poster',
                duration:'0min',
                gif:'/video/3/gif',
                name:'async js'
                },
                {
                    id:4,
                    poster:'/video/0/poster',
                    gif:'/video/4/gif',
                    duration:'0min',
                    name:'closures'
                    },
                    {
                        id:5,
                        poster:'/video/5/poster',
                        gif:'/video/5/gif',
                        duration:'0min',
                        name:'web apis'
                        },
                        {
                            id:6,
                            poster:'/video/0/poster',
                            gif:'/video/6/gif',
                            duration:'0min',
                            name:'microtask queus'
                            },
                            {
                                id:7,
                                poster:'/video/7/poster',
                                gif:'/video/7/gif',
                                duration:'0min',
                                name:'call stack'
                                },
                                {
                                    id:8,
                                    poster:'/video/8/poster',
                                    gif:'/video/8/gif',
                                    duration:'0min',
                                    name:'event loop'
                                    },
                                    {
                                        id:9,
                                        poster:'/video/9/poster',
                                        gif:'/video/9/gif',
                                        duration:'0min',
                                        name:'execution context'
                                        },
                                       
 ]
export const getVideosMetaData= async (req,res)=>{
    try{
res.json(videos)
    }
    catch(e){

    }
}
export const getVideoData=(req,res)=>{
    try{
        const id=parseInt(req.params.id,10)
        res.json(videos[id])
    }
    catch(e){
        console.log(e)
    }
}