Feature: This feature will make sure that the shop page is navigable and usable.


Scenario:  User navigates to shop page
Given I am on the home page
When I navigate to 'Deals'
Then the user should be on the 'https://www.sky.com/shop/offers' page

Scenario:  User sees list of offers on the latest offers page
Given I am on the 'https://www.sky.com/shop' page
Then I see a list of offers with a price to it

Scenario:  User sees the editorial section in specific searches
Given I am on the home page
When I search 'sky' in the search bar
Then I should see an editorial section