import { toNano } from '@ton/core';
import { Jetton } from '../wrappers/Jetton';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const jetton = provider.open(
        Jetton.createFromConfig(
            {
                id: Math.floor(Math.random() * 10000),
                counter: 0,
            },
            await compile('Jetton')
        )
    );

    await jetton.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(jetton.address);

    console.log('ID', await jetton.getID());
}
