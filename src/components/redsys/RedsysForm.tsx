import React, { useEffect } from "react";
import { RedsysFormProps } from "./types";

/**
 * This component create a form to send payment data to redsys
 * Review this url to see more information: https://pagosonline.redsys.es/conexion-insite.html
 */

const RedsysForm: React.FC<RedsysFormProps> = ({
  containerId,
  fuc,
  orderId,
  terminal,
  configs,
}) => {
  const cardId = containerId ?? "card-form";

  const validateData = (data: unknown) => {
    console.log("validateData", data);
    return true;
  };

  useEffect(() => {
    // initialize iframe form
    getInSiteFormJSON({
      id: cardId,
      order: orderId,
      fuc,
      terminal,
      ...configs,
    });

    // catch response from the payment form operation(Operation ID)
    window.addEventListener("message", (event) => {
      console.log("redsys response", event);
      storeIdOper(event, "token", "errorCode", validateData);
    });
  }, []);

  return (
    <>
      <div id={cardId} />
      <form name="datos">
        <input type="hidden" id="token"></input>
        <input type="hidden" id="errorCode"></input>
      </form>
    </>
  );
};

export default RedsysForm;
