import { Capacitor } from "@capacitor/core";
import { App } from "@capacitor/app"

if (Capacitor.isNative) { 
   alert("native");
}

App.addListener('appStateChange', ({ isActive }) => {
   alert('App state changed. Is active?', isActive);
  });
  
  App.addListener('appUrlOpen', data => {
    alert('App opened with URL:', data);
  });
  
  App.addListener('appRestoredResult', data => {
    alert('Restored state:', data);
  });
  
  const checkAppLaunchUrl = async () => {
    const { url } = await App.getLaunchUrl();
  
    alert('App opened with URL: ' + url);
  };