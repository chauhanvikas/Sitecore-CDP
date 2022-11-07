# Sitecore-CDP

Sitecore CDP Examples code and the Sitecore CDP Integration Starter Kit This JavaScript sample code integrates the Sitecore CDP to gather information from any website, including page views, form submissions, add-on fields, add-to-cart events, and more.

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
  - function is used to save the Registered user data and identify the user
  # AddLocationTosession : 
  - Function is used to add geo data and Geo location service needs tob integrate
  # AddItemtoCart : 
  - function is used for to add product detail to CDP when user add prodcuts in Cart.
  # Checkout : 
  - function is used to add checkout event
  # Search : 
  - function is used to add search text to CDP
  # CollectPageView : 
  - function is used to save page view event to CDP
  # Sample decision-model to identify most visited product category from Ordercloud headstart and recommonded the most viewd products of that category 
  -  Create a connection to Ordercloud service which will return the products on basis of category.
  - Create the experience to rendered the product listing
  - https://app.boxever.com/#/decision-models/0443b582-9da7-49e4-961e-bed8fde8742a/d8644811-3ff6-451d-9363-0d2cd3d0b73b
  - https://app.boxever.com/#/connections/list?updatedBy=%5B%22c6887c89-6f0f-4e5c-8ed6-ff630f6d5b3a%22%5D&orderedBy=last%20updated
  - https://app.boxever.com/#/experiences/web/7c0093b2-1681-4871-9090-ccb3cd026d1e?section=build

# An example decision-model and full stack experience implementation of how to give a personalised product recommendation based on user interest as determined by website form submission
 - https://app.boxever.com/#/experiences/full-stack/e2d24b3f-f964-410a-b113-d25dedeab20a?section=build
 - https://app.boxever.com/#/decision-models/851a5a9a-72eb-4a46-b1af-badb2847c09f/103c5e73-f253-42f6-af43-36ea3c5c5843
  
