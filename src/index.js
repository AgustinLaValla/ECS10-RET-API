import '@babel/polyfill';
import app from './server';
import colors from 'colors';
import { connect } from './databse';

async function main() {
    await app.listen(app.get('port'));
    await connect();
    console.log(`${colors.magenta('Server on port:')} ${colors.green(app.get('port'))}`);
};

main();