require('dotenv').config();
const express = require('express');
const app = express();
const kelasRouter = require("./api/kelas/kelas.router");
const pembayaranRouter = require("./api/pembayaran/pembayaran.router");
const petugasRouter = require("./api/petugas/petugas.router");
const siswaRouter = require("./api/siswa/siswa.router");
const sppRouter = require("./api/spp/spp.router");
app.use(express.json());
app.use("/api/kelas", kelasRouter);
app.use("/api/pembayaran", pembayaranRouter);
app.use("/api/petugas", petugasRouter)
app.use("/api/siswa", siswaRouter);
app.use("/api/spp", sppRouter);

app.listen(process.env.APP_PORT, ()=>{
    console.log("Tersambung di PORT : " + process.env.APP_PORT)
})
