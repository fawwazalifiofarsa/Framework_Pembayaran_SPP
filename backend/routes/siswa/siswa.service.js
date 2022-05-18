const db = require('../../config/connection.js');
module.exports={
    add:(data,callBack)=>{
        db.query(`insert into siswa set ?`,
        [data],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                return callBack(null,results)
            }
        })
    },
    get:(callBack)=>{
        db.query(`select * from siswa`,
        [],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                return callBack(null, results)
            }
        })
    },
    getId:(data,callBack)=>{
        db.query(`select * from siswa where nisn = ?`,
        [data],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                return callBack(null,results)
            }
        })
    },
    update:(data,callBack)=>{
        db.query(`select * from siswa where nisn=?`,
        [data.nisn],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`update siswa set ? where nisn = ?`,
                [
                    data,
                    data.nisn
                ]);
                return callBack(null,results[0])
            }
        })
    },
    del:(data,callBack)=>{
        db.query(`select nisn from siswa where nisn = ?`,
        [data],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`delete from siswa where nisn = ?`,
                [data]);
                return callBack(null,results[0])
            }
        })
    }
}
