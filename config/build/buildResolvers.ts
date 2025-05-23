import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";
import path from "path";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            app: path.resolve(options.paths.src, 'app'),
            Pages: path.resolve(options.paths.src, 'pages'),
            helpers: path.resolve(options.paths.src, 'helpers'),
        },
    }
}