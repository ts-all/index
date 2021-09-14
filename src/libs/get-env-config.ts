/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-explicit-any */
import { constantCase } from './constant-case';

export function getEnvConfig(envConfig: Record<string, any>, continueOnEmpty: boolean = false, printTemplate: boolean = false): void {
    if (!process.release.name) {
        return;
    }
    for (const key in envConfig) {
        if (Reflect.has(envConfig, key)) {
            const envKeyName: string = constantCase(key);

            if (printTemplate) {
                const hasValue: boolean = Boolean((envConfig)[key]);
                if (hasValue) {
                    console.info(`T_${envKeyName}="${(envConfig)[key] as string}"`);
                } else {
                    console.info(`${envKeyName}=""`);
                }
            }

            if (Reflect.has(process.env, envKeyName)) {
                console.info(process.env[envKeyName], envKeyName);
                if (typeof (envConfig)[key] == 'string') {
                    (envConfig)[key] = (process.env[envKeyName] ?? (envConfig)[key]) || '';
                } else if (typeof (envConfig)[key] == 'number') {
                    (envConfig)[key] = Number.parseFloat(process.env[envKeyName] ?? '') || (envConfig)[key];
                }
            }

            if (!(envConfig)[key]) {
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
