// Components==============
import React from "react";
import styled from "styled-components";
import { SimpleButton } from "../Components/SimpleButton";
import { Xs } from "../style/Mixins";
// =========================

const FormCard = styled.div`
  border-top: ${({ theme: { spacing } }) => spacing.s9}
    ${({ theme: { primary } }) => primary.s5.replace("1)", "0.7)")} solid;
  margin: ${({ theme: { spacing } }) => `${spacing.s8} auto `};
  padding: ${({ theme: { spacing } }) => `${spacing.s8} ${spacing.s10}`};
  max-width: 800px;
  background-color: ${({ theme: { white } }) => white};
  box-shadow: ${({ theme: { shadow } }) => shadow.medium};
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .formElement {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s5};

    input,
    select,
    textarea {
      padding: ${({ theme: { spacing } }) => ` 11px ${spacing.s4}`};
      width: 250px;
      border-radius: ${({ theme: { borderRadius } }) => borderRadius};
      border: none;
      background-color: ${({ theme: { primary } }) =>
        primary.s7.replace("1)", "0.05)")};
    }
  }
`;

const Label = styled(Xs)`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
  color: ${({ theme: { primary } }) => primary.s7};
`;

const VoorNaam = styled.div``;

const AchterNaam = styled.div`
  justify-self: end;
`;

const Mail = styled.div``;

const Telefoon = styled.div`
  justify-self: end;
`;

const Functie = styled.div``;

const GeboorteDatum = styled.div`
  justify-self: end;
`;

const CV = styled.div``;

const Bericht = styled.div`
  grid-column: 1/3;

  #bericht {
    width: 100%;
    min-height: ${({ theme: { spacing } }) => spacing.s13};
  }
`;

const FormButton = styled(SimpleButton)`
  max-width: 170px;
  margin: ${({ theme: { spacing } }) => spacing.s4} auto 0;
  grid-column: 1/3;
`;

// https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation

export default function JobForm() {
  return (
    <FormCard>
      <Form
        name="test2"
        method="post"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="test2" />
        {/* The `hidden` fields are required to support form submissions without JavaScript */}
        <VoorNaam className="formElement">
          <Label>Voornaam</Label>
          <input name="Voornaam" />
        </VoorNaam>
        <AchterNaam className="formElement">
          <Label>Achternaam</Label>
          <input name="Achternaam" />
        </AchterNaam>
        <Mail className="formElement">
          <Label>Email-adres</Label>
          <input type="email" name="Email-adres" />
        </Mail>
        <Telefoon className="formElement">
          <Label>Telefoonnummer</Label>
          <input type="tel" name="Telefoonnummer" />
        </Telefoon>
        <Functie className="formElement">
          <Label>Functie</Label>
          <select name="Functie">
            <option>Koerierdienst</option>
            <option>Logistiek medewerker</option>
          </select>
        </Functie>
        <GeboorteDatum className="formElement">
          <Label>geboorte datum</Label>
          <input type="date" name="geboorte datum" />
        </GeboorteDatum>
        <CV className="formElement">
          <Label>CV</Label>
          <input type="file" name="CV" />
        </CV>
        <Bericht className="formElement">
          <Label>Bericht</Label>
          <textarea name="Bericht" id="bericht" />
        </Bericht>
        <FormButton as="button" type="submit" className="formElement">
          Stuur sollicitatie
        </FormButton>
      </Form>
    </FormCard>
  );
}
