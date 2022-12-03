import React from "react";
import GoToTop from "../GoToTop";
import {
  FaqTcSect,
  FaqTcSection,
  FaqTcSectWrapper,
  FaqTcSectTitle,
  FaqTcSectParagraph,
  FaqTcSectTitleH3,
} from "./FaqsTcElements";

const RefundPolicies = () => {
  return (
    <FaqTcSect>
      <FaqTcSection>
        <FaqTcSectWrapper>
          <FaqTcSectTitle>Refund Policies for Practiwiz</FaqTcSectTitle>
          <FaqTcSectParagraph>Welcome to www.practiwiz.com!</FaqTcSectParagraph>
          <FaqTcSectParagraph>
            We offer users a four (4)- day, no-questions-asked money-back
            guarantee on all courses.
          </FaqTcSectParagraph>
          <FaqTcSectParagraph>
            The refund should be claimed within 4 days of registration.
          </FaqTcSectParagraph>
          <FaqTcSectParagraph>
            No such request will be entertained after 4 days.
          </FaqTcSectParagraph>
          <FaqTcSectParagraph>
            If you access our Learning management system, You will not get any
            refund for the course.
          </FaqTcSectParagraph>
          <FaqTcSectParagraph>
            To request a refund, please send an email to support@practiwiz.com.
          </FaqTcSectParagraph>
          <FaqTcSectParagraph>
            We recommend contacting us for assistance if you experience any
            issues receiving or downloading our products.
          </FaqTcSectParagraph>
          <FaqTcSectParagraph>
            Contact us for any issues by email: support@practiwiz.com
          </FaqTcSectParagraph>
          <GoToTop />
        </FaqTcSectWrapper>
      </FaqTcSection>
    </FaqTcSect>
  );
};

export default RefundPolicies;
