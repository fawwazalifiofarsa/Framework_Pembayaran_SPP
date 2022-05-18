//import
require('dotenv').config();
const express = require('express');
const cors = require('cors');

//implementasi
const app = express();
app.use(cors());

//endpoint nanti ditambahkan di sini
const kelasRouter = require("./routes/kelas/kelas.router");
const pembayaranRouter = require("./routes/pembayaran/pembayaran.router");
const petugasRouter = require("./routes/petugas/petugas.router");
const siswaRouter = require("./routes/siswa/siswa.router");
const sppRouter = require("./routes/spp/spp.router");

app.use(cors());
app.use(express.json());
app.use("/kelas", kelasRouter);
app.use("/pembayaran", pembayaranRouter);
app.use("/petugas", petugasRouter);
app.use("/siswa", siswaRouter)
app.use("/spp", sppRouter);

//run server
app.listen(process.env.APP_PORT, ()=>{
    console.log("Tersambung di PORT : " + process.env.APP_PORT)
})
