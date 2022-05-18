const {
    add,
    get,
    getId,
    update,
    del
} = require('./spp.service')
module.exports = {
    controllerAdd:(req,res)=>{
        const data_spp = {
            tahun : req.body.tahun,
            nominal : req.body.nominal
        }
        add(data_spp,(err,results)=>{
            if(err){
                console.log(err);
                return
            }else{
                return res.status(200).json({
                    success : 1,
                    data : results,
                    data_spp
                })
            }
        })
    },

    controllerGet:(req,res)=>{
        get((err,results)=>{
            if(err){
                console.log(err)
                return
            }else{
                return res.json({
                    success:1,
                    data:results
                })
            }
        })
    },
    controllerGetId:(req,res)=>{
        const id_spp = req.body.id_spp
        getId(id_spp,(err,results)=>{
            if(err){
                console.log(err)
                return
            }else{
                return res.json({
                    success:1,
                    data:results
                })
            }
        })
    },

    controllerUpdate:(req,res)=>{
        const data_spp = {
            tahun : req.body.tahun,
            nominal : req.body.nominal
        }
        update(data_spp,(err,results)=>{
            if(err){
                console.log(err)
                return
            }else if(!results){
                return res.json({
                    success : 0,
                    message : "Not Found"
                })
            }else{
                return res.json({
                    success:1,
                    data:results
                })
            }
        })
    },

    controllerDelete:(req,res)=>{
        const id_spp = req.body.id_spp
        del(id_spp,(err,results)=>{
            if(err){
                console.log(err)
                return
            }else if(!results){
                return res.json({
                    success:0,
                    message:"Not Found"
                })
            }else{
                return res.json({
                    success:1,
                    message:"Delete Success"
                })
            }
        })
    }

}