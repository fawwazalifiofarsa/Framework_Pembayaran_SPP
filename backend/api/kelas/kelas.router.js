const {
    controllerAdd,
    controllerGet,
    controllerGetId,
    controllerUpdate,
    controllerDelete
} = require('./kelas.controller');
const router = require('express').Router();
const {checkToken} = require("../../auth/token_validation")

router.post('/', checkToken,controllerAdd);
router.get('/', checkToken,controllerGet);
router.get('/id', checkToken,controllerGetId);
router.patch('/id',checkToken, controllerUpdate);
router.delete('/id',checkToken,controllerDelete);

module.exports = router;