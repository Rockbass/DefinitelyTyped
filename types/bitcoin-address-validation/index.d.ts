// Type definitions for bitcoin-address-validation 0.2
// Project: https://github.com/ruigomeseu/bitcoin-address-validation
// Definitions by: Vladimir Ponomar <https://github.com/rockbass>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

export interface ValidationResponse {
    address: string;
    type: string;
    testnet: false;
    bech32: false;
}

export default function validateBtcAddress(address: any): ValidationResponse | boolean;
