import React from "react";
import styled from "styled-components";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../components/ContactItem";

const ContactPage = () => {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const locationOn = <LocationOnIcon />;
  return (
    <MainLayout>
      <Title title="Contact" span="Contact" />
      <ContactPageStyled>
        <InnerLayout className="contact-section">
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form">
              <div className="form-field">
                <label htmlFor="name">Enter your name:</label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email:</label>
                <input type="email" id="email" />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter subject:</label>
                <input type="text" id="subject" />
              </div>
              <div className="textarea">
                <label htmlFor="text-area">Enter your message:</label>
                <textarea name="textarea" id="textarea"></textarea>
              </div>
              <div className="form-field f-button">
                <PrimaryButton title="Send Email" />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              icon={phone}
              title="Phone"
              contact1="+385 1234 123"
              contact2="+385 1234 123"
            />
            <ContactItem
              icon={email}
              title="Email"
              contact1="test@test.com"
              contact2="test1@test1.com"
            />
            <ContactItem
              icon={locationOn}
              title="Location"
              contact1="Croatia; Split;"
              contact2="Croatia; Split;"
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
};

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }

    .left-content {
      .textarea {
        display: flex;
        flex-direction: column;

        label {
          margin-bottom: 0.5rem;
        }
      }
    }

    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;

export default ContactPage;
