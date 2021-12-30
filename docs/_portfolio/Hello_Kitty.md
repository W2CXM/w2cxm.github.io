---
title: Hello Kitty
subtitle: "Launch Date: Sunday, 10/6/2013. 3:00pm EST. East Hill Plaza, Ithaca, NY."
image: assets/img/balloon/hello_kitty.jpg

caption:
  title: Hello Kitty
  thumbnail: assets/img/balloon/hello_kitty.jpg
---

### Mission Objectives
* Lightweight payload.
* Beacon CW.
* Timed or Short Duration flight.
* Foxhunt retrieval.

### Technology
* Alinco DJ-C4T - 300mw transmitter on 70cm - 446.450
* Mylar balloons.
* Party Gas will provide adequate lift for this launch.
* Atmel AVR ATtiny13
* 71J3430 n-Type MOSFET for activating PTT on the radio
* Hamlin HE721C0510 reed relay for nichrome burn
* (3) AA Energizer Ultimate Lithium batteries, in series, for radio and nichrome.
* (1) CR 2032 button battery for Tiny13 controller, PTT and Piezo Electric Buzzer.

### Balloon Design
#### Parachute Size

I ran a MATLAB simulation and came up with these results:

```
   __Input:__
   Cd(Coefficient of Drag):  0.75                 = 0.75
   Parachute Diameter:       12 [in]              = 0.305 [m]
   wind speed:               22 [ft/s]            = 6.7056 [m/s]     
```

```
   __Output:__
   vxfinal: 	               22 [ft/s]            = 6.7056 [m/s]
   vyfinal: 	               15.6022 [ft/s]       = 4.75 [m/s]
   Kinetic Energy at impact: 0.56477 [ft*lbf]     = 0.766 [J]
   Max Force:                0 [lbf] at 500 [ft]  = 0 N
```

Cornell Rocketry has light weight parachute that is 12[in] diameter.


![](assets/img/balloon/hello_kitty_2.gif)

