const db = require('../../config/connection.js');
module.exports={
    add:(data,callBack)=>{
        db.query(`insert into pembayaran set ?`,
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
        db.query(`select * from pembayaran`,
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
        db.query(`select * from pembayaran where id_pembayaran = ?`,
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
        db.query(`select * from pembayaran where id_pembayaran=?`,
        [data.id_pembayaran],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`update pembayaran set ? where id_pembayaran = ?`,
                [
                    data,
                    data.id_pembayaran
                ]);
                return callBack(null,results[0])
            }
        })
    },
    del:(data,callBack)=>{
        db.query(`select id_pembayaran from pembayaran where id_pembayaran = ?`,
        [data],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`delete from pembayaran where id_pembayaran = ?`,
                [data]);
                return callBack(null,results[0])
            }
        })
    }
}
