---
title: Operation Lil' Bub
subtitle: "Launch Date: Saturday, 08/02/2014. 10:30am EST"
image: assets/img/balloon/lilbub.jpg

caption:
  title: Operation Lil' Bub
  thumbnail: assets/img/balloon/lilbub.jpg
---

### Overview
This balloon will use our new and improved “Peach1” tracker board and a small USB Key Fob camera.

### Mission Summary
**Success!**
The balloon was launched on schedule with the tracker and camera operating. Though the tracker experienced a few reboots during flight, we were able to track the payload to the landing spot and retrieve it.

### Mission Objectives
* Use our new Peach1 tracker board.
* Move the USB Key fob camera inside the pay load container to avoid thermal concerns.

### Mission Parameters

| Balloon	            | | [Latex 150g](https://www.amazon.com/dia-Professional-Weather-Balloon-150g/dp/B0081UGJ9W/ref=sr_1_1?ie=UTF8&qid=1401635740&sr=8-1&keywords=latex+weather+balloon+150g) |
| Lifting Gas	        | | Helium                         | 
| Payload            	| | Tracker, Micro camera          |
| Payload container	  | | Plastic bottle and bubble wrap |
| Max Payoad Weight	  | | 150g                           |
| Flight Time         | |	45-90 min                      |
| Cutdown	            | | Balloon Burst                  |
| Recovery            | | 12“ Parachute                  |
| Tracking            | | Peach1 HAB tracker             |
| Telemetry         	| | GPS and temperature data       |

<br>

### Balloon and Payload Weight Budget

| **Item**                               |     | **Weight (grams)** |
| -------------------------------------- | --- | ------------------ |
| Batteries - (1) 300ma LiPo             |     | 9                  |
| Batteries - (1) AAA Ultimate Lithium   |     | 8                  |
| Payload container                      |     | 25                 |
| Tracker + Counterpoise                 |     | 19                 |
| Parachute + guyline                    |     | 17                 |
| Balloon                                |     | 150                |
| Balloon attachment (tape)              |     | 10                 |
| Camera 1                               |     | 19                 |
| **Total (goal: 300)**                  |     | **257**            |

<br>

### Final Package
![](assets/img/balloon/mark5_payload.jpg)

### Budget

| **Item**                               |     | **Estimated Cost** |
| -------------------------------------- | --- | ------------------ |
| [Latex Weather Balloon (150g)](https://www.amazon.com/dia-Professional-Weather-Balloon-150g/dp/B0081UGJ9W/ref=sr_1_3?ie=UTF8&qid=1399343405&sr=8-3&keywords=latex+weather+balloon) |     | $25                |
| Helium or Hydrogen (80 cu ft cylinder) |     | $66                |
| Mini camera & SD card                  |     | $30                |
| APRS Tracker                           |     | $150               |
| Packaging, Parachute                   |     | $10                |
| **Total**                              |     | **$281**           |

<br>

### Balloon Prediction Input

| [Predictor](http://predict.habhub.org/)    |           | 	                                         |
| ------------------------------------------ | --------- | ------------------------------------------|
| Payload Mass                               |           | 100g                                      |
| Balloon Mass                               |           | 200g Kaymont                              |
| Total Mass                                 |           | 300g                                      |
| Target Ascent Rate                         |           | 6.0 m/s                                   |
| Descent Rate                               |           | 8.0 m/s                                   |
| Gas                                        |           | Helium                                    |           
| Burst Diameter                             |           | 2.4m                                      |
| Start Location                             |           | Trumansburg Fairgrounds, New York         |

<br>

#### Notes:
* The predictor does not have 150g balloons, so we used a 200, deducted 50g from the payload weight, and specified an explicit burst diameter based on manufacturer specs.
* Descent rate calculated using Model Rocket Descent Rate Calculator. Total weight 200g. 12” hexagonal parachute. Note, the calculator estimated just under 6 m/s. However, experience shows that the balloon remnants often come down with the payload, speeding the descent. Rounded up to 8 m/s based on previous launch experience.

### Balloon Prediction Output

| Burst Altitude | | 10464 m    |
| Ascent Rate	   | | 7.52 m/s   |
| Neck Lift	     | | 1550 g     |
| Launch Volume	 | | 60.2 cu ft |
| Flight Range	 | | 26.2 km    |
| Flight Time	   | | 40 min     |

<br>

Note: The balloon manufacturer claims 15,000m burst altitude. We are filling this balloon a LOT.

### Chase Cars
* Launch: Hojo/KD2EAT and Dave/KD2GBX
* Chase1: Kevin/WB2EMS
* Chase2: Jon/KC2WAC

### Launch and Recovery

#### Balloon Fill
Using volume of a sphere for 60.2 cu ft

* Volume of a sphere
  * v = 60.2 (per predictor)
  * v = 4/3 pi r**3
* Solving for r, the radius:
  * r = cube root(3v /4pi)
  * r = 2.43 feet
* The circumference of the sphere is pi*d
  * c = pi * 2 * r
  * c = 15.27
We called it 15' 3“ circumference.

Expected pounds of gas to use:
PSI = volume / .0265 PSI = 60.2 / .0265 PSI = 2272 PSI drop in tank.

#### Launch
At the time of the fill, we put in more gas. The tanks were nearly empty, and we wanted a short flight, so we put in a fair bit more gas. The balloon diameter should have been about 4'8”. I'm 5'11“ and the balloon looked about as tall as me in this shot. Assuming a 6' diameter, we filled the balloon with about 113 cu ft of helium. It didn't seem to make the flight shorter, however. The balloon burst much higher than predicted.

![](assets/img/balloon/img_8779.jpg)

#### Actual track vs projected track

![](assets/img/balloon/google_earth_comparison.png)

|          	     |   | **Predicted** |   | **Actual**  |
| -------------  | - | ------------- | - | ----------- |
| Burst Altitude |   | 10,464m       |   |	13,500m    |
| Ascent Rate	   |   | 7.52 m/s      |   |	8.57 m/s   |
| Descent Rate   |   | 8.0 m/s       |   |	8.91 m/s   |
| Flight Range   |   | 26.2 km       |   |	49.54 km   |
| Flight Time    |   | 40 min        |   |	49 min     |

<br>

Note, given that the balloon was overfilled at launch to nearly 6' in diameter (113 cu ft), the predictor indicates that the ascent rate should have been about 8.66m/s. This very closely matches our observed ascent rate of 8.57m/s. Let's hear it for science!

### Payload

#### Temperature
The payload temperature dropped to about -4c during the peak of the flight. This did not interfere with the tracker, though the battery voltage did drop considerably due to the temperature (from 1.64v to 1.38v). It rebounded as the temps came back up.

#### Camera
The 808 camera performed very well. Prior to flight, it was measured at using about 110ma while recording. We used a 300mah LiPo battery for the flight, and we had over 2 hours of video on the camera when retrieved. Each 10 minute block of video used approximately a gigabyte of space. The 16G SD card had just over 12G of footage on it.

#### Recovery

The balloon landed on the roof of a duplex. We fished it off with a few antenna whips duct taped onto an extensible pole saw.

![](assets/img/balloon/img_8782.jpg)

### Lessons Learned

* The tracker had some issues with reboots. They need to be resolved prior to the next flight.
* The 150g balloons apparently have quite a bit of variability in burst altitude! That was a surprise.
* Although the parachute predictor estimated a descent rate of about 6 m/s, we rounded up to 8 based on previous experience with the balloon remains interfering with the parachute function. The observed descent rate was 8.9 m/s. We could have rounded even higher.
  * In future, we might want to use a larger chute than recommended to temper the descent rate, or find a means to jettison the balloon remains after burst.

