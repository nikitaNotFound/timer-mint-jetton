import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'func',
    targets: ['contracts/jetton-wallet.fc', 'contracts/jetton-utils.fc', 'contracts/op-codes.fc'],
};
