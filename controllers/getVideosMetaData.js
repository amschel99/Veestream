
 export const videos=[
    {
    id:0,
    poster:'/video/0/poster',
    duration:'0min',
    name:'thread of execution'
    },
    {
        id:1,
        poster:'/video/1/poster',
        duration:'0min',
        name:'callbacks'
        },
        {
            id:2,
            poster:'/video/2/poster',
            duration:'0min',
            name:'high order functions'
            },
            {
                id:3,
                poster:'/video/3/poster',
                duration:'0min',
                name:'async js'
                },
                {
                    id:4,
                    poster:'/video/0/poster',
                    duration:'0min',
                    name:'closures'
                    },
                    {
                        id:5,
                        poster:'/video/5/poster',
                        duration:'0min',
                        name:'web apis'
                        },
                        {
                            id:6,
                            poster:'/video/0/poster',
                            duration:'0min',
                            name:'microtask queus'
                            },
                            {
                                id:7,
                                poster:'/video/7/poster',
                                duration:'0min',
                                name:'call stack'
                                },
                                {
                                    id:8,
                                    poster:'/video/8/poster',
                                    duration:'0min',
                                    name:'event loop'
                                    },
                                    {
                                        id:9,
                                        poster:'/video/9/poster',
                                        duration:'0min',
                                        name:'execution context'
                                        },
                                        {
                                            id:10,
                                            poster:'/video/10/poster',
                                            duration:'0min',
                                            name:'generalised function'
                                            }
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