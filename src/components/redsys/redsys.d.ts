declare function getCardInput(id: any, style: any, textoPlaceholder: any, styleInput: any): void;
declare function getExpirationInput(id: any, style: any, textoPlaceholder: any): void;
declare function getExpirationYearInput(id: any, style: any, textoPlaceholder: any): void;
declare function getExpirationMonthInput(id: any, style: any, textoPlaceholder: any): void;
declare function getCVVInput(id: any, style: any, textoPlaceholder: any): void;
declare function getPayButton(id: any, style: any, buttonValue: any, fuc: any, terminal: any, order: any): void;
declare function getInSiteForm(id: any, styleButton: any, styleBody: any, styleBox: any, styleBoxText: any, buttonValue: any, fuc: any, terminal: any, order: any, idioma: any): void;
declare function getInSiteFormJSON(insiteJSON: any): void;
declare function init3DS(id: any, emv3ds: any): void;
declare function execute3DSMethod(id: any, threeDSMethodURL: any, threeDSServerTransID: any): void;
declare function toHex(str: any): string;
declare function hex2a(hex: any): string;
declare function storeIdOper(ev: any, id: any, err: any, funct: any): void;
declare function set3DSResult(ev: any, id: any): void;
declare function close3DS(): void;
declare function loadRedsysForm(): void;
declare function setMerchantDomain(time: any): void;
declare var REDSYS_DOMAIN: string;
declare var IFRAME_REDSYS: string;
declare var result3DSMethod: string;
declare var id3DSMethod: string;
