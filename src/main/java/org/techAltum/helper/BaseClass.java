package org.techAltum.helper;

import java.net.URL;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.techAltum.dataReader.PropertyReader;
import org.webDriver.listener.WebEventListener;

public class BaseClass {

	//public WebDriver driver;
	public WebDriver dr;
	public EventFiringWebDriver driver;
	//public DriverEventListeners driver;
	public WebEventListener eventListener;
	public PropertyReader propertyReader; 
	
	public void selectBrowser(String browserName) throws Exception{
		String OS_Name = System.getProperty("os.name");
		String browserDriversPath = System.getProperty("user.dir") + "/browserDrivers";
		propertyReader = new PropertyReader();
		String baseURL = propertyReader.getProperty().getProperty("URL");
		
		//Select OS
		if(OS_Name.toLowerCase().contains(OS.WINDOWS.name().toLowerCase())) {
			System.out.println("Running tests on = " + OS.WINDOWS.name());
		
			if(browserName.equalsIgnoreCase(Browser.CHROME.name())) {
				//https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
				
				DesiredCapabilities cap  = new DesiredCapabilities();
				cap.setCapability("platform", "WINDOWS");
				cap.setCapability("browserName", "chrome");
				
				dr = new RemoteWebDriver(new URL("http://192.168.0.7:34034/wd/hub"), cap);
				
				//dr = new RemoteWebDriver(new URL("http://192.168.1.4:9090/wd/hub"), cap);
			}
			
			else if(browserName.equalsIgnoreCase("firefox")) {    //Pls change it
				//Open FF
				DesiredCapabilities cap = new DesiredCapabilities();
				cap.setCapability("browserName", "firefox");
				cap.setCapability("platform", "WINDOWS");
				
				dr = new RemoteWebDriver(new URL("http://192.168.1.4:9090/wd/hub"), cap);
			}
		}
		
		//OS - MAC
		else if(OS_Name.equalsIgnoreCase(OS.MAC.name())) {
			System.out.println("Running tests on = " + OS.MAC.name());
		}
		initDriver();
		driver.manage().window().maximize();
		driver.get(baseURL);
	}
	
	public void closeBrowser() {
		driver.quit();
	}
	public void initDriver() {
		driver = new EventFiringWebDriver(dr);
		//driver = new DriverEventListeners(dr);
		eventListener = new WebEventListener();
		driver.register(eventListener);
	}
}
