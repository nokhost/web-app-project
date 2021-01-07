const express = require('express')
const router = express.Router();

//admin Router
const adminRouter =require( './admin')
router.use('/admin', adminRouter)

//home Router
const homeRouter =require( './home')
router.use('/', homeRouter)




module.exports = router;