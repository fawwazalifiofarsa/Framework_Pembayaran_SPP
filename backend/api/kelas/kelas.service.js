const db = require('../../config/connection');
module.exports={
    add:(data,callBack)=>{
        db.query(`insert into kelas set ?`,
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
        db.query(`select * from kelas`,
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
        db.query(`select * from kelas where id_kelas = ?`,
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
        db.query(`select * from kelas where id_kelas = ?`,
        [data.id_kelas],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`update kelas set ? where id_kelas = ?`,
                [
                    data,
                    data.id_kelas
                ]);
                return callBack(null,results[0])
            }
        })
    },
    del:(data,callBack)=>{
        db.query(`select id_kelas from kelas where id_kelas = ?`,
        [data],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`delete from kelas where id_kelas = ?`,
                [data]);
                return callBack(null,results[0])
            }
        })
    }
}