const db = require('../../config/connection');
module.exports={
    add:(data,callBack)=>{
        db.query(`insert into spp set ?`,
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
        db.query(`select * from spp`,
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
        db.query(`select * from spp where id_spp = ?`,
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
        db.query(`select * from spp where id_spp = ?`,
        [data.id_spp],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`update spp set ? where id_spp = ?`,
                [
                    data,
                    data.id_spp
                ]);
                return callBack(null,results[0])
            }
        })
    },
    del:(data,callBack)=>{
        db.query(`select id_spp from spp where id_spp = ?`,
        [data],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`delete from spp where id_spp = ?`,
                [data]);
                return callBack(null,results[0])
            }
        })
    }
}