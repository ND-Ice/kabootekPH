import AboutProvider from "../context/AboutProvider";
import AddressProvider from "../context/AddressProvider";
import EmailProvider from "../context/EmailProvider";
import HomeProvider from "../context/HomeProvider";
import PhoneProvider from "../context/PhoneProvider";
import ServicesProvider from "../context/ServicesProvider";
import SocialProvider from "../context/SocialProvider";
import CommunityProvider from "../context/CommunityProvier";
import CustomThemeProvider from "../context/CustomThemeProvider";

export default function ContextProvider({ children }) {
  return (
    <HomeProvider>
      <ServicesProvider>
        <AboutProvider>
          <EmailProvider>
            <PhoneProvider>
              <SocialProvider>
                <CommunityProvider>
                  <CustomThemeProvider>
                    <AddressProvider>{children}</AddressProvider>
                  </CustomThemeProvider>
                </CommunityProvider>
              </SocialProvider>
            </PhoneProvider>
          </EmailProvider>
        </AboutProvider>
      </ServicesProvider>
    </HomeProvider>
  );
}
