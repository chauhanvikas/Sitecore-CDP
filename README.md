# Sitecore-CDP

Sitecore CDP Integration Starter Kit and Samples
This JavaScript sample code to integrate the Sitecore CDP tp collect the data from any website Like page view , form submmition , Add extension field, Add to cart event and etc
# window.mobileCheck 
- Function has been used to detect the device.
# SitecoreCDPVariable : To declared the required parameters like
  -  _client_key: "",    _target: "https://api.boxever.com/v1.2",
  -  _cookie_domain: "",
  -  _pointOfSale: "Demo",
  -  _web_flow_target: "https://d35vb5cccm4xzp.cloudfront.net",
  -  url: "",
  -  pageName: "/" === window.location.pathname ? "home" : PageUrlsplit[PageUrlsplit.length - 1]
  # SubscribeContactUS : 
  - function is sample exaple to push the form data to CDP.
  # AddUpdateExtendedField :
  - function is used to extension field to Sitecore CDP
  # SubscribeUserRegistration : 
  -function is used to save the Registered user data and identify the user
  # AddLocationTosession : 
  -Function is used to add geo data and Geo location service needs tob integrate
  # AddItemtoCart : 
  -function is used for to add product detail to CDP when user add prodcuts in Cart.
  # Checkout : 
  -function is used to add checkout event
  # Search : 
  -function is used to add search text to CDP
  # CollectPageView : 
  -function is used to save page view event to CDP
