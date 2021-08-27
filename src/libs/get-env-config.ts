import { constantCase } from './constant-case';

export function getEnvConfig(envConfig: Record<string, any>, continueOnEmpty: boolean = false): void {
    if (!process) {
        return;
    }
    for (const key in envConfig) {
        if (Reflect.has(envConfig, key)) {
            let envKeyName: string = constantCase(key);

            if (Reflect.has(process.env, envKeyName)) {
                console.log(process.env[envKeyName], envKeyName);
                if (typeof (envConfig as Record<string, any>)[key] == 'string') {
                    (envConfig as Record<string, any>)[key] = process.env[envKeyName] || (envConfig as Record<string, any>)[key] || '';
                } else if (typeof (envConfig as Record<string, any>)[key] == 'number') {
                    (envConfig as Record<string, any>)[key] = parseFloat(process.env[envKeyName] || '') || (envConfig as Record<string, any>)[key];
                }
            }

            if (!(envConfig as Record<string, any>)[key]) {
                console.error(`No ENV Variable found with name: ${envKeyName}`)
                if (!continueOnEmpty) {
                    process.exit(1);
                } else {
                    continue;
                }
            }
        }
    }
}
