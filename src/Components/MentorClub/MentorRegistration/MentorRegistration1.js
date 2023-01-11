import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { PhoneNumberUtil } from "google-libphonenumber";
import { countriesWithCodes } from "../../Data/FaqData";
import { BiHide, BiShow } from "react-icons/bi";

const phoneUtil = PhoneNumberUtil.getInstance();
const MentorSection = styled.section`
  width: 100%;
  height: calc(100vh - 130px) !important;
`;
const MentorWrapper = styled.div``;
const MentorDivFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const MentorRightDiv = styled.div`
  width: 100%;
  height: 100vh;
`;
const MentorLeftDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1434' height='564' preserveAspectRatio='none' viewBox='0 0 1434 564'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1025%26quot%3b)' fill='none'%3e%3crect width='1434' height='564' x='0' y='0' fill='url(%23SvgjsLinearGradient1026)'%3e%3c/rect%3e%3cpath d='M897.8181603125062 19.62770189342655L806.5753039600595 117.47368605906718 904.4212881257001 208.7165424115138 995.6641444781468 110.87055824587318z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M838.0424568111168 357.6733400466037L806.6287916274008 483.66666941793073 932.6221209987278 515.0803346016468 964.0357861824439 389.08700523031973z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M910.1379493040201 378.67657816674443L945.3208716005846 461.5623488956989 1052.058066545734 367.34508008637494z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M342.8468448537704 261.2277090969968L200.63285899709638 179.1204260801165 118.52557598021605 321.3344119367905 260.73956183689006 403.44169495367083z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1419.2469347538681 225.9074389168347L1250.5019153505496 135.97773277371348 1253.4190821010827 303.1021039822915z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M430.5849835885107 431.54949137311104L351.148386851445 313.77989357925105 312.8153857946507 510.9860881101767z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M522.13%2c402.576C537.168%2c403.084%2c554.419%2c404.028%2c562.767%2c391.509C571.725%2c378.076%2c568.003%2c360.201%2c559.572%2c346.431C551.537%2c333.308%2c537.495%2c324.309%2c522.13%2c325.142C507.919%2c325.912%2c498.131%2c337.758%2c491.113%2c350.14C484.223%2c362.297%2c478.87%2c376.89%2c485.984%2c388.917C493.012%2c400.799%2c508.333%2c402.11%2c522.13%2c402.576' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1041.98188670787 187.92276323929568L948.1050045171769 275.464372121685 1035.6466133995661 369.34125431237817 1129.5234955902592 281.7996454299888z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M753.621051861317 85.40198991959393L665.8347340696309 90.00267588649155 670.4354200365285 177.7889936781777 758.2217378282146 173.18830771128006z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1185.475841633987 289.10407989459145L1119.713386731474 469.25057021598843 1285.2905205677594 443.02572854278753z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M864.964%2c368.193C894.752%2c368.614%2c917.096%2c343.259%2c930.524%2c316.666C942.546%2c292.858%2c943.038%2c264.504%2c928.667%2c242.036C915.282%2c221.11%2c889.802%2c213.764%2c864.964%2c214.169C840.953%2c214.56%2c817.413%2c223.645%2c804.759%2c244.055C791.424%2c265.563%2c791.494%2c292.087%2c802.537%2c314.857C815.338%2c341.252%2c835.632%2c367.778%2c864.964%2c368.193' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M300.913%2c375.079C335.351%2c376.869%2c371.543%2c366.909%2c389.916%2c337.726C409.343%2c306.867%2c406.507%2c267.477%2c388.68%2c235.667C370.424%2c203.093%2c338.244%2c179.785%2c300.913%2c178.913C262.097%2c178.007%2c222.952%2c196.589%2c205.748%2c231.396C189.911%2c263.437%2c206.877%2c299.439%2c226.613%2c329.237C243.836%2c355.241%2c269.764%2c373.46%2c300.913%2c375.079' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M462.532%2c529.896C512.046%2c534.126%2c569.474%2c528.816%2c594.475%2c485.869C619.562%2c442.773%2c596.008%2c390.05%2c567.931%2c348.839C543.862%2c313.511%2c505.216%2c294.544%2c462.532%2c292.203C414.425%2c289.565%2c358.639%2c294.079%2c335.011%2c336.067C311.623%2c377.628%2c338.389%2c426.391%2c364.601%2c466.232C387.537%2c501.095%2c420.952%2c526.344%2c462.532%2c529.896' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1415.695115321982 293.80903173243405L1339.4587797758415 330.9919770111287 1376.6417250545362 407.22831255726913 1452.8780606006767 370.0453672785745z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M665.5212569948774 283.37485245614147L684.5230950642135 418.5799557243433 819.7281983324153 399.5781176550071 800.7263602630792 264.37301438680527z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M658.278%2c491.53C679.393%2c490.429%2c692.436%2c471.18%2c703.168%2c452.962C714.137%2c434.341%2c725.624%2c413.082%2c715.841%2c393.811C705.397%2c373.237%2c681.343%2c363.923%2c658.278%2c364.532C636.277%2c365.113%2c616.719%2c377.637%2c605.749%2c396.717C594.815%2c415.735%2c593.846%2c438.918%2c604.477%2c458.107C615.443%2c477.9%2c635.681%2c492.708%2c658.278%2c491.53' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1025'%3e%3crect width='1434' height='564' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.17%25' y1='-38.56%25' x2='84.83%25' y2='138.56%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1026'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='%2300459e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
  background-repeat: no-repeat;
  width: 100% !important;
  background-position: center;
  background-size: cover;
`;
const MentorChildrenFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Field = styled.div`
  width: 100%;
  margin: 0 auto 10px auto;
`;
const Input = styled.input`
  outline: none;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  width: 100%;
  padding: 10px 20px;
  &:focus {
    border-color: #fc83bb;
  }
`;
const PwdField = styled.div`
  width: 100%;
  margin: 0 auto 10px auto;
  position: relative;
`;
const PwdIcons = styled.div`
  top: 12px;
  right: 15px;
  position: absolute;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const ShowIcon = styled(BiShow)`
  font-size: 22px;
  color: #111;
`;

const HideIcon = styled(BiHide)`
  font-size: 22px;
  color: #111;
`;

const ErrorMessage = styled.p`
  color: red;
  margin: 0px 0 0 10px;
`;
const FormSelect = styled.select`
  width: 100%;
  outline: none;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  padding: 10px 10px;
  &:focus {
    border-color: #fc83bb;
  }
`;
const FormOption = styled.option``;
const SignUpButton = styled.button`
  padding: 10px 20px;
  width: 100%;
  outline: none;
  font-size: 15px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  color: #fff;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  font-size: 20px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  background: -webkit-linear-gradient(left, #3e5ce4, #4282fa);
  margin: 10px 0 5px 0 !important;
  &:disabled {
    cursor: not-allowed !important;
  }
`;
const MentorTitle = styled.h1`
  &::after {
    background-color: red;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }
`;
const MentorLeftTitle = styled.h1`
  font-size: 40px;
  color: #fff;
  position: relative;
  font-weight: 600;
  margin-bottom: 30px;
  &::after {
    background-color: #ee6c29;
    content: "";
    display: inline-block;
    height: 1px;
    position: absolute;
    vertical-align: middle;
    width: 50%;
    /* top: 0; */
    bottom: 0;
    left: 0;
    margin-top: 10px;
  }
`;
const MentorLeftChildren = styled.div`
  width: 70%;
  p {
    color: #fff;
    font-size: 15px;
    margin-bottom: 20px;
    line-height: 18px;
    font-weight: 300;
  }
`;
const MentorRegistration1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    trigger,
  } = useForm();
  const [showIcon, setShowIcon] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const verifyMobileNumber = (event) => {
    if (!countryCode) {
      return (
        setPhoneNumberError("Select the country first"),
        setValidPhoneNumber(false)
      );
    }
    const number = countryCode + event.target.value;
    if (number.length < 6 || number.length > 13) {
      return (
        setPhoneNumberError("Must be a valid phone number"),
        setValidPhoneNumber(false)
      );
    }
    const parsePhoneNumber = phoneUtil.parseAndKeepRawInput(number);
    // Check if the number is valid
    if (phoneUtil.isValidNumber(parsePhoneNumber) === true) {
      return setPhoneNumberError(" "), setValidPhoneNumber(true);
    } else {
      // Not a valid number
      return (
        setPhoneNumberError("Must be a valid phone number"),
        setValidPhoneNumber(false)
      );
    }
  };
  const password = watch("password");
  return (
    <MentorSection>
      <MentorWrapper>
        <MentorDivFlex>
          <MentorLeftDiv>
            <MentorChildrenFlex>
              <MentorLeftChildren>
                <div>
                  <MentorLeftTitle>Become a Mentor!</MentorLeftTitle>
                </div>
                <div>
                  <p>
                    Are you an industry expert or Are you good at Mentoring the
                    people to achieve there goals.Then join now as mentor in the
                    practiwiz.com and win exciting prizes
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto amet veritatis, eum alias error perferendis nemo
                    iste necessitatibus reiciendis sit soluta, fuga consequatur
                    exercitationem facilis temporibus quia quisquam beatae in.
                  </p>
                </div>
              </MentorLeftChildren>
            </MentorChildrenFlex>
          </MentorLeftDiv>
          <MentorRightDiv>
            <MentorChildrenFlex>
              <div>
                <div>
                  <MentorTitle>Sign Up Right Now !</MentorTitle>
                </div>
                <Field>
                  <Input
                    required
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email must be Required for registration",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("email");
                    }}
                  />
                  {errors.email && (
                    <ErrorMessage>{errors.email.message}</ErrorMessage>
                  )}
                </Field>
                <Field>
                  <Input
                    required
                    type="text"
                    placeholder="Enter your First Name"
                    {...register("firstName", {
                      required: "firstname is Required",
                      minLength: {
                        value: 4,
                        message: "Must be 4 characters at least",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("firstName");
                    }}
                  />
                  {errors.firstName && (
                    <ErrorMessage>{errors.firstName.message}</ErrorMessage>
                  )}
                </Field>
                <Field>
                  <Input
                    required
                    type="text"
                    placeholder="Enter your Last Name"
                    //onChange={(e) => setLastName(e.target.value)}
                    {...register("lastName", {
                      required: "last name is Required",
                      minLength: {
                        value: 4,
                        message: "Must be 4 characters at least",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("lastName");
                    }}
                  />
                  {errors.lastName && (
                    <ErrorMessage>{errors.lastName.message}</ErrorMessage>
                  )}
                </Field>
                <PwdField>
                  <Input
                    required
                    type={showIcon ? "text" : "password"}
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Password is Required",
                      pattern: {
                        value:
                          /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
                        message:
                          "A minimum 8 - 16 characters password contains a combination of upper, lowercase letter and number are required special characters like @ _ $ ! % * ? &",
                      },
                      maxLength: {
                        value: 16,
                        message: "Must be less than 16 characters.",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("password");
                    }}
                  />
                  {errors.password && (
                    <ErrorMessage>{errors.password.message}</ErrorMessage>
                  )}
                  <PwdIcons onClick={(e) => setShowIcon(!showIcon)}>
                    {showIcon ? <ShowIcon /> : <HideIcon />}
                  </PwdIcons>
                </PwdField>
                <PwdField>
                  <Input
                    required
                    type={showIcon ? "text" : "password"}
                    placeholder="Confirm Your Password"
                    //onChange={(e) => setConfirmPassword(e.target.value)}
                    {...register("confirmPassword", {
                      required: "Enter confirm password",
                      validate: (value) =>
                        value === password || "Password must be matched",
                    })}
                    onKeyUp={() => {
                      trigger("confirmPassword");
                    }}
                  />
                  {errors.confirmPassword && (
                    <ErrorMessage>
                      {errors.confirmPassword.message}
                    </ErrorMessage>
                  )}
                  <PwdIcons onClick={() => setShowIcons(!showIcons)}>
                    {showIcons ? <ShowIcon /> : <HideIcon />}
                  </PwdIcons>
                </PwdField>
                <Field>
                  <FormSelect
                    required
                    name=""
                    id=""
                    onChange={(event) => {
                      return (
                        setCountryCode(event.target.value),
                        setPhoneNumberError("")
                      );
                    }}
                  >
                    <>
                      <FormOption value="">Choose the country code</FormOption>
                      {countriesWithCodes.map((country, index) => (
                        <FormOption value={country.mobileCode}>
                          {country.name + " "}(
                          {country.code + " " + country.mobileCode})
                        </FormOption>
                      ))}
                    </>
                  </FormSelect>
                </Field>
                <Field>
                  <Input
                    required
                    type="number"
                    placeholder="Enter your mobile number"
                    onChange={verifyMobileNumber}
                  />
                  {phoneNumberError && (
                    <ErrorMessage>{phoneNumberError}</ErrorMessage>
                  )}
                </Field>
                <SignUpButton>Register now!</SignUpButton>
                <p>
                  have an account
                  <span>
                    <a href="/login"> sign in </a>
                  </span>
                  right now!
                </p>
              </div>
            </MentorChildrenFlex>
          </MentorRightDiv>
        </MentorDivFlex>
      </MentorWrapper>
    </MentorSection>
  );
};

export default MentorRegistration1;
