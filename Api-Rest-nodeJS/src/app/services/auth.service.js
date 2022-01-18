const bcrypt = require('bcryptjs');
const authService={};

authService.encryptPassword= async(password)=>{
    const salt= await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
}
authService.comparePassword = async (password,recivedPasswod)=>{
   return await bcrypt.compare(password,recivedPasswod);
}

module.exports = authService;