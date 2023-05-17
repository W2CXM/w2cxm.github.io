---
title: 2013 Repeater Upgrade
subtitle: 
image: assets/img/balloon/repeater_upgrade.jpeg

caption:
  title: Operation Lil' Bub
  thumbnail: assets/img/balloon/repeater_upgrade.jpeg
---

# 2013 Repeater Upgrade

## Background

The 2013 Repeater Upgrade project is about updating the current W2CXM 146.61 repeater hardware to a more modern set of hardware. As of November 2nd, 2013, we have the following at the repeater site:

- Uniden ARH-351 Repeater
  - Broken PA
  - Replaced with mobile PA
- RC-850 Repeater Controller
- 6-can Duplexer

The first question is obviously: "If it ain't broke, why fix it?" Well, while technically true that the repeater is "not broken," it's not exactly in the best shape either. The list of current issues:

- "Hammering" noise during daylight hours. The TX gets mixed into the RX and a feedback loop is created, resulting in the repeater being keyed up and transmitting an awful sound reminiscent of hammering for potentially hours on end.
- The ARH-351 repeater PA is in fact broken.
- Due to the hammering issue, the mobile PA overheats and has been melting the rubber and plastic portions of its casing, in particular the rubber feet.
- Neither the ARH-351 nor the RC-850 support (in their current state) PL enc/dec, which we believe is one solution to the hammmering problem (turn on PL dec on the RX side, DO NOT turn on the PL enc on the TX side).

## MASTR-II Upgrade (In Progress)

Well, given the list of problems in the Background section, it would seem the primary issue is that of the hammering. To address this, we were prepared to spend on the order of $100 to purchase the additional equipment to enable PL enc/dec on the current repeater. During our research, it turned out we have the opportunity to replace the ARH-351 with a MASTR-II, which is a significant upgrade. This upgrade would accomplish the following:

- Replace the outdated, broken, unpopular ARH-351 with a MASTR-II
  - We'd be getting a new repeater with a working PA, designed for 110W continuous duty cycle
  - The MASTR-II would include PL enc/dec capability, hopefully addressing the hammering issue.
  - The MASTR-II is a proven, popular repeater platform, and one that is widely used in the region near Ithaca. This would mean we have access to the local body of knowledge and experience. In comparison, the ARH-351 is unpopular and no one really knows how to work with it.

The total cost to W2CXM to upgrade the ARH-351 to a MASTR-II is $160. During one of the weekly club meetings in mid-October 2013, it was decided that a 60% increase in cost for a significant improvement to the W2CXM repeater that will last long into the future was worth it, so we have released the funds from the club account to KD2SL, who is helping us with the upgrade. A big thank you to Kevin (KD2SL) for doing this! The $160 represents only parts cost—Kevin is volunteering his time!

## Repeater Controller Upgrade

### Overview

Given that we are already upgrading the RF part of the repeater, it seems reasonable for us to upgrade the repeater controller as well at the same time. KD2SL has requested that we either ship him the current RC-850 repeater controller so he can integrate it with the MASTR-II, or provide him with a different repeater controller for integration and testing.

It seems reasonable to upgrade the entire repeater infrastructure for two main reasons:

- Having a complete upgrade would allow us to keep the ARH-351/RC-850 pair as a hot-spare, in the event of a failure with the new equipment. As disaster recovery and preparedness is one of the key missions of W2CXM, this seemed a good plan.
- Upgrading to a new repeater controller would bring with it the possibility of more modern features such as EchoLink/IRLP, cross-band operation, and the return of the autopatch, even if just for 911/emergency calls.

Thanks to the generosity of [TCARA](http://tcara-ny.org/), we now have a donated [RLC-2](http://www.eham.net/reviews/detail/1651) repeater controller. Unfortunately, for whatever reason, the RLC-2 isn't coming online in a straightforward manner. We're not convinced that it's dead, but it's not going to be an easy fight.

### Feature List

- **EchoLink/IRLP**
  - *Reasoning*: We are a school club, and our members will graduate (unless you're a grad student, hihi) or otherwise move on. It would be nice to have alumni check in from time to time and use IRLP to connect with other schools.
  - *Importance*: Arguably the most important thing, and what continually comes up in discussion.
- **Cross-band Operation**
  - *Reasoning*: Lower the cost of entry to HF from thousands to a $30 [Baofeng](http://www.amazon.com/BaoFeng-UV-5R-136-174-400-480-Dual-Band/dp/B007H4VT7A).
  - *Importance*: Nice to have, but we can actually "fake" this by bringing up an HF station elsewhere on IRLP and connecting them. Yes, we lose the remote base control, but we can bring up a separate control system for the HF station. This does mean that we'd lose the HT-only control, but everyone has internet these days.
- **Autopatch**
  - *Reasoning*: For 911/Emergencies, the reasoning is fairly self-evident.
  - *Importance*: Nice to have. We could probably do without this, especially since we're not guaranteed to be able to get a phone line in the repeater site.
- **ADC/GPIO**
  - *Reasoning*: Be able to control/interact with other things in the repeater site. Fans, SWR meters, temperature sensors, UPS/battery status, etc.
  - *Importance*: Again, nice to have. If we use the Raspberry Pi for Echolink/IRLP, we actually get some of these features, just not on the radio. This will probably be okay, especially with the fact that we can build some internet-based reporting.
- **DVR**
  - *Reasoning*: Being able to have the repeater echo back what you sound like is great for testing rigs/diagnosing problems.
  - *Importance*: Nice to have, but we could actually use the echolink TEST conference for this, if all we're interested in is testing our own rigs. Mailboxes/etc seem to be a fun toy, but no one really uses them after the initial novelty wears off (or at least this has been the general consensus).

### Choosing a Controller

During the last half of October 2013, there has been much discussion in email threads as well as on one weekly W2CXM net about the potential candidates for repeater controllers, as well as the desired feature list. The candidate list as follows:

- [Arcom RC210](http://www.arcomcontrollers.com/index.php/rc210/rc210-board)
- [NHRC MS2C](http://www.nhrc.net/nhrc-m2sc/) / [NHRC-7](http://www.nhrc.net/nhrc-7/index.php)
- [SCom 7330](http://www.scomcontrollers.com/new/?q=node/13)
- [ID-O-MATIC III](http://www.hamgadgets.com/ID-O-MATIC-III) + [PiIRLP](http://www.irlp.net/pi/) (IDOM+Pi)
- Do Nothing. Use the [RC-850](http://www.repeater-builder.com/acc/pdfs/acc-rc-850-manual.pdf)

The opinion of two local repeater builders, N2PYI and KD2SL, is that the SCom series is good. KD2SL suggests that the Arcom RC210 is also quite good, and the NHRC is "okay." However, none of those statements directly address the feature list we might want. To do this, we look to the table below:

| Feature                               |       Arcom RC210 |   NHRC-7 |    SCom 7330 |         IDOM+Pi | RC-850 |
|---------------------------------------|-------------------|----------|--------------|-----------------|--------|
| Audio Delay Support                   |               YES |       NO |          YES |              NO |     NO |
| Autopatch (without using radio port)  |               YES |       NO |           NO |              NO | Broken |
| ADC Ports                             |                 8 |     None |            3 |  ADC on I2C/SPI |     NO |
| CTCSS Support (PL enc/dec)            |               YES |      YES |          YES |     On MASTR-II |     NO |
| DTMF Decode (for control)             |               YES |      YES |          YES |              NO |    YES |
| DVR (Voice Recording)                 |               YES |       NO |  Over RS-232 |    Use ECHOTEST |     NO |
| DVR Playback (for testing)            |               YES |       NO |           NO |    Use ECHOTEST |     NO |
| Out-of-Box EchoLink/IRLP Support      |                NO |       NO |           NO |         **YES** |     NO |
| Fan Control                           |               YES |      YES |          YES |             YES |     NO |
| GPIO Ports                            |       5 in, 7 out |     None |  4 in, 4 out |           On Pi |     NO |
| Multiple Radio Ports (For Cross-Band) |           3 Ports |  2 Ports |      3 Ports |              NO |     NO |
| Programming Interface                 | Windows over DTMF |     DTMF |  RS-232/DTMF |  USB<sup>3</sup> |  DTMF |
| Real-time Clock                       |               YES |       NO |          YES |              NO |    YES |
| Remote Base Support                   |   YES<sup>1</sup> |       NO |           NO |              NO |     NO |
| Cost<sup>4</sup> (w/ Rack Mount)      |  $295<sup>2</sup>  |    $339 |          $479 |            $367 |     $0 |

1. <sup>1</sup>The Arcom RC210 supports Kenwood, Icom, Yaesu, and Doug Hall RBI-1 protocols for remote bases.

2. <sup>2</sup>Does not include the autopatch ($149) or the audio delay ($35) modules. Can add an additional battery backup for the real-time clock ($49.95). Total of all bells & whistles: $529.

3. <sup>3</sup>The ID-O-MATIC III is USB-programmed, and the Pi is programmed over SSH/whatever you feel like. We can actually plug the ID-O-MATIC III into the Pi and program remotely. That sounds pretty great.

4. <sup>4</sup>Only the IDOM+Pi option includes the cost of the Echolink/IRLP computer/embedded computer.

One big remaining challenge is getting a phone line and network connection up at the repeater site. On the 10/30/2013 W2CXM net we came to the consensus that we should upgrade the controller even without these connections being guaranteed. Having the capability to use them allows for growth into the future, and none of these problems are insurmountable, even in the near future.

**UPDATE 12/11/2013**: We have provisions for a network connection up on the repeater site, thanks to WB2EMS.

### Old Proposal

Pre-IDOM+Pi, the Arcom RC210 was the good-looking choice.

### Current Proposal

If we're willing to "cheat" and use the internet to get our **Cross-band Operation** and **DVR** features, we're willing to move the GPIO/ADC to the Raspberry Pi, and we're willing to forgo the Autopatch, we can actually get what we want from the ID-O-MATIC III + Raspberry Pi with a significant savings over the Arcom RC210.

This is especially important if we consider the fact that we're probably going to use a [Raspberry Pi](http://www.raspberrypi.org/) for Echolink/IRLP. The cost of that can be quite steep, even though the cost of Pi is only $35. After you buy the power adapter, the SD card, the IRLP card, etc. etc., we're looking at a cost of about $270, if this site is representative: [http://www.irlp.net/pi/](http://www.irlp.net/pi/).

Here's the bottom line: If we're willing to offload some of the features we want to a Raspberry Pi, instead of being on the controller itself, we could probably get away with an [ID-O-MATIC III](http://www.hamgadgets.com/ID-O-MATIC-III) as our "controller" of choice. It's not going to talk at us, but if you're not a fan of a chatty repeater, that's probably okay!

| Equipment                                                  | Description                  | Cost |
|------------------------------------------------------------|------------------------------|------|
| [ID-O-MATIC III](http://www.hamgadgets.com/ID-O-MATIC-III) | Controller                   | $38  |
| [NHRC-M2SC](http://www.nhrc.net/nhrc-m2sc/)                 | MASTR-II Interface           | $59  |
| [PiIRLP](http://www.irlp.net/pi/)                           | Raspberry Pi + Echolink/IRLP | $270 |
| Total                                                      |                              | $367 |

This gets us pretty much everything, save autopatch, for _less_ than we'd need for the Arcom RC210 (if we also count the

 Raspberry Pi stuff). Just for reference, an Arcom RC-210 + PiIRLP is $565.

One final point: The ID-O-MATIC III doesn't exclude us from moving to other controllers in the future. However, it's true that we're going to need the NHRC-M2SC and the PiIRLP for any controller, so a $38 investment just to get the ball rolling for KD2SL is arguably a good one.

Understanding that the current ARH-351/RC-850 solution has been existence for over 2 decades(?), we must look forward and assume that whatever solution we arrive at during the course of this project must survive and grow with the club for a similar duration of time.

### Final Configuration

The repeater upgrade was completed in 2014. We elected not to implement the PiRLP module due to the lack of ethernet availability in the elevator shack in Bradfield.

The final configuration of the repeater at that time was as follows:

| Equipment                                                                                         | Description           |
|---------------------------------------------------------------------------------------------------|-----------------------|
| [GE Master II Repeater](http://www.repeater-builder.com/ge/geindex.html#GE-M2-Station)             | GE Master II Repeater |
| [NHRC-M2SC](http://www.nhrc.net/nhrc-m2sc/)                                                      | MASTR-II Interface    |
| [ID-O-MATIC III](http://www.hamgadgets.com/ID-O-MATIC-III)                                        | Controller            |
| [Wacom WP-641 4-cavity Duplexer w/2 additional bandpass cans](http://www.rollanet.org/~rrars/wp641.pdf) | Wacom WP-641          |
| xxx                                                                                               | Antenna               |