$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/OneTravelHome.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to Onetravel homepage features such as\n  \tWidget fillup\n  \tInitiate search with advance options\n  \tVerification of all tabs - Flights, Hotels, Cars\n  \tFlight deals from popular destinations\n  \tVerify Onetravel credit card option\n  \tetc",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Fill widget and initiate search - Oneway",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on onetravel home page",
  "keyword": "Given "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.user_is_on_onetravel_home_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"input[class\u003d\u0027pqr\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.130)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.5\u0027, revision: \u0027d54ebd709a\u0027, time: \u00272018-11-06T11:42:16\u0027\nSystem info: host: \u0027DESKTOP-AMSG348\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\nkumar65.000\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:53645}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webdriver.remote.sessionid: 3bbaaa4aeaf53d631df7c9bdfca...}\nSession ID: 3bbaaa4aeaf53d631df7c9bdfca62131\n*** Element info: {Using\u003dcss selector, value\u003dinput[class\u003d\u0027pqr\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$1(EventFiringWebDriver.java:105)\r\n\tat com.sun.proxy.$Proxy17.findElement(Unknown Source)\r\n\tat org.webDriver.listener.WebEventListener.beforeFindBy(WebEventListener.java:89)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$0(EventFiringWebDriver.java:84)\r\n\tat com.sun.proxy.$Proxy16.beforeFindBy(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:193)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat org.techAltum.pageObject.OnetravelHomePage.enterFromCity(OnetravelHomePage.java:22)\r\n\tat org.techAltum.stepDefinition.OneTravelHomeStepDefn.user_is_on_onetravel_home_page(OneTravelHomeStepDefn.java:25)\r\n\tat ✽.User is on onetravel home page(file:src/test/resources/features/OneTravelHome.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Verify that flight tab is selected",
  "keyword": "Then "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.verify_that_flight_tab_is_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Veriy that oneway is  selected",
  "keyword": "Then "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.veriy_that_oneway_is_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter source city \"\u003cNYC\u003e\"",
  "keyword": "And "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.enter_source_city(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter destination city \"\u003cLON\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.enter_destination_city(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select depart date \"\u003c22Dec\u003e\"",
  "keyword": "And "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.select_depart_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on search now",
  "keyword": "Then "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.click_on_search_now()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Listing page should appear",
  "keyword": "And "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.listing_page_should_appear()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify search details on Listing page",
  "keyword": "Then "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.verify_search_details_on_Listing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Fill widget and initiate search - Round Trip",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on onetravel home page",
  "keyword": "Given "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.user_is_on_onetravel_home_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"input[class\u003d\u0027pqr\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.130)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.5\u0027, revision: \u0027d54ebd709a\u0027, time: \u00272018-11-06T11:42:16\u0027\nSystem info: host: \u0027DESKTOP-AMSG348\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\nkumar65.000\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:53711}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webdriver.remote.sessionid: 5f47abb9ecb212258c35cc0f909...}\nSession ID: 5f47abb9ecb212258c35cc0f909b345a\n*** Element info: {Using\u003dcss selector, value\u003dinput[class\u003d\u0027pqr\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$1(EventFiringWebDriver.java:105)\r\n\tat com.sun.proxy.$Proxy17.findElement(Unknown Source)\r\n\tat org.webDriver.listener.WebEventListener.beforeFindBy(WebEventListener.java:89)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$0(EventFiringWebDriver.java:84)\r\n\tat com.sun.proxy.$Proxy16.beforeFindBy(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:193)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat org.techAltum.pageObject.OnetravelHomePage.enterFromCity(OnetravelHomePage.java:22)\r\n\tat org.techAltum.stepDefinition.OneTravelHomeStepDefn.user_is_on_onetravel_home_page(OneTravelHomeStepDefn.java:25)\r\n\tat ✽.User is on onetravel home page(file:src/test/resources/features/OneTravelHome.feature:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Verify that flight tab is selected",
  "keyword": "Then "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.verify_that_flight_tab_is_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Veriy that round trip is selected",
  "keyword": "Then "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.veriy_that_round_trip_is_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter source city",
  "keyword": "And "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.enter_source_city()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter destination city",
  "keyword": "Then "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.enter_destination_city()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select depart date",
  "keyword": "And "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.select_depart_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select return date",
  "keyword": "And "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.select_return_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on search now",
  "keyword": "Then "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.click_on_search_now()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Listing page should appear",
  "keyword": "And "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.listing_page_should_appear()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify search details on Listing page",
  "keyword": "Then "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.verify_search_details_on_Listing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Send tickets to passengers",
  "rows": [
    {
      "cells": [
        "Passengers_Name"
      ]
    },
    {
      "cells": [
        "Sachin"
      ]
    },
    {
      "cells": [
        "Sanjay"
      ]
    },
    {
      "cells": [
        "Nikhil"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.send_tickets_to_passengers(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Please do practice",
  "keyword": "And "
});
formatter.match({
  "location": "OneTravelHomeStepDefn.please_do_practice()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});