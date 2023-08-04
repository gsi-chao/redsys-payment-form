export interface RedsysFormProps {
  // id of the card-form container
  containerId?: string;
  // order id from backend
  orderId: string;
  // store identified created in redsys
  fuc: string;
  // terminal number assigned by bank
  terminal: string;
  // form configuration
  configs?: {
    styleButton?: string;
    styleBody?: string;
    styleBox?: string;
    styleBoxText?: string;
    buttonValue?: string;
    idiomaInsite?: string;
    mostrarLogoInsite?: boolean;
    estiloReducidoInsite?: boolean;
    estiloInsite?: 'inline' | 'twoRows';
  };
}
