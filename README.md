# Decision process

For this task development I have followed the following steps:

- We will be working with Angular material so I have created a material module where all the material imports will be located.
 
- In the app component we can find the router navigation, the side navigation bar and the header which will be common for the whole application.

- In app-router.module file we can have the route specification, we can see her that have two main components to be shown: Home and analysis. Both is this components will be shown as 
  the side navigation content.

- The home component contains several currency-card components, in charge of show the different exchange prices depending of the currency and a graphic component in charge of showing a   
  the price evolution in USD of the last 30 days.
  
- The analysis component contain two date selectors where we can pick the dates to be shown in the graphic above them which also contain the price evolution in USD of the picked dates.

- Also we can find a service which will handle the http request to the bitcoin API.
