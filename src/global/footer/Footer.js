import React from "react";
import "./Footer.css";
import { Input, Stack,InputGroup,InputLeftElement } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
export const Footer = () => {
  return (
    <div className="footer">
      <div className="information">
        <div className="title">
          <h1>Informations</h1>
        </div>
        <div className="content">
          <p>Conditions générales de vente</p>
          <p>Conditions de remboursement et d'utilisation</p>
          <p>Mentions légales</p>
          <p>Politique de confidentialité</p>
        </div>
      </div>
      <div className="form">
        <div className="title">Contact Us</div>
        <div className="content">
          <Stack spacing={3}>
            <Input   focusBorderColor='pink.400' variant="flushed" placeholder="FirstName" width={300} />
            <Input   focusBorderColor='pink.400' variant="flushed" placeholder="LastName" width={300} />
            <Input   focusBorderColor='pink.400' variant="flushed" placeholder="Email" width={300} />
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="gray.300" />
              </InputLeftElement>
              <Input   focusBorderColor='pink.400'  variant="flushed" type="tel" placeholder="Phone number" width={300} />
            </InputGroup>
            <Input   focusBorderColor='pink.400' variant="flushed" placeholder="Message" width={300} />
          </Stack>

          <button className="submit">Send</button>
        </div>
      </div>
      <div className="contact">
        <div className="title">Find Us</div>
        <div className="content">
          <p> Rue Oran immeuble Jgham 3ème étage N5 Hammam Sousse 4011 Sousse Tunisie</p>
          <p><PhoneIcon />55236452</p>
          <p><EmailIcon/>contact@gmail.com.tn</p>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2024, All Rights Reserved Owner Sara&imen</p>
      </div>
    </div>
  );
};
