const {
    add,
    get,
    getId,
    update,
    del
} = require('./pembayaran.service')
module.exports = {
    controllerAdd:(req,res)=>{
        const data_pembayaran = {
            id_pembayaran : req.body.id,
            id_petugas : req.body.id_petugas,
            nisn : req.body.nisn,
            tgl_bayar : req.body.tgl_bayar,
            id_spp : req.body.id_spp,
            jumlah_bayar : req.body.nominal
        }
        add(data_pembayaran,(err,results)=>{
            if(err){
                console.log(err);
                return
            }else{
                return res.status(200).json({
                    success : 1,
                    data : results,
                    data_pembayaran
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
        const data_pembayaran = req.body.id_pembayaran
        getId(data_pembayaran,(err,results)=>{
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
        const data_pembayaran = {
            id_pembayaran : req.body.id,
            id_petugas: req.body.id_petugas,
            nisn : req.body.nisn,
            tgl_bayar : req.body.tgl_bayar,
            id_spp : req.body.id_spp,
            jumlah_bayar : req.body.nominal
        }
        update(data_pembayaran,(err,results)=>{
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
        const data_pembayaran = req.body.id_pembayaran
        del(data_pembayaran,(err,results)=>{
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
