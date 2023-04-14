// Creado y editado por Victor Garay Montes
import './database/connection'
import app from './app'

app.listen(app.get('port'));


console.log(`Server on port`, app.get('port'));
