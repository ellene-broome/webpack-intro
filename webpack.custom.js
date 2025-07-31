import path from 'path';
    import { fileURLToPath } from 'url';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);


    export default {
      entry: './client/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },
        mode: 'development',
    };

