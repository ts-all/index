import { constantCase } from './constant-case';

export type EnvConfigBase = Record<string, unknown>;

export function getEnvConfig(envConfig: EnvConfigBase, continueOnEmpty: boolean = false, printTemplate: boolean = false): void {
    if (!process.release.name) {
        return;
    }
    for (const key in envConfig) {
        if (Reflect.has(envConfig, key)) {
            const envKeyName: string = constantCase(key);

            if (printTemplate) {
                const hasValue: boolean = Boolean(envConfig[key]);
                if (hasValue) {
                    console.info(`Z_${envKeyName}="${envConfig[key] as string}"`);
                } else {
                    console.info(`${envKeyName}=""`);
                }
            }

            if (Reflect.has(process.env, envKeyName)) {
                console.info(envKeyName, process.env[envKeyName]);
                if (typeof envConfig[key] == 'string') {
                    envConfig[key] = (process.env[envKeyName] ?? envConfig[key]) || '';
                } else if (typeof envConfig[key] == 'number') {
                    envConfig[key] = Number.parseFloat(process.env[envKeyName] ?? '') || envConfig[key];
                }
            }

            if (!envConfig[key]) {
                console.error(`No ENV Variable found with name: ${envKeyName}`);
                if (continueOnEmpty) {
                    continue;
                } else {
                    process.exit(1);
                }
            }
        }
    }
}
