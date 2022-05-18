const {
    add,
    get,
    getId,
    update,
    del
} = require('./siswa.service');
module.exports = {
    controllerAdd:(req,res)=>{
        const data_siswa = {
            nisn : req.body.nisn,
            nis : req.body.nis,
            nama : req.body.nama,
            id_kelas : req.body.id_kelas,
            alamat : req.body.alamat,
            no_telp : req.body.telp
        }
        add(data_siswa,(err,results)=>{
            if(err){
                console.log(err);
                return
            }else{
                return res.status(200).json({
                    success : 1,
                    data : results,
                    data_siswa
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
        const data_siswa = req.body.nisn
        getId(data_siswa,(err,results)=>{
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
        const data_siswa = {
            nisn : req.body.nisn,
            nis: req.body.nis,
            nama : req.body.nama,
            id_kelas : req.body.id_kelas,
            alamat : req.body.alamat,
            no_telp : req.body.telp
        }
        
        update(data_siswa,(err,results)=>{
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
        const data_siswa = req.body.nisn
        del(data_siswa,(err,results)=>{
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
