const {
    add,
    get,
    getId,
    update,
    del
} = require('./kelas.service')
module.exports = {
    controllerAdd:(req,res)=>{
        const data_kelas = {
            id_kelas : req.body.id,
            nama_kelas : req.body.nama,
            jurusan : req.body.jurusan
        }
        add(data_kelas,(err,results)=>{
            if(err){
                console.log(err);
                return
            }else{
                return res.status(200).json({
                    success : 1,
                    data : results,
                    data_kelas
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
        const data_kelas = req.body.id
        getId(data_kelas,(err,results)=>{
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
        const data_kelas = {
            id_kelas : req.body.id,
            nama_kelas: req.body.nama,
            jurusan : req.body.jurusan
        }
        update(data_kelas,(err,results)=>{
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
        const data_kelas = req.body.id
        del(data_kelas,(err,results)=>{
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
