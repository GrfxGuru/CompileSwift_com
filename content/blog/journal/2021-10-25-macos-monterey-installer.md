---
templateKey: blog-post
slug:
author: Peter Witham
tags: ["Journal", "Podcast"]
title: How to create a macOS Monterey USB installer
date: 2021-10-25T16:15:06
description: Do you want to be able to install Monterey without downloading every time? There is a command for that. Read on.
---

<iframe src="https://anchor.fm/compileswift/embed/episodes/Create-a-macOS-Monterey-USB-Installer-e19a5rd" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>

The day has arrived at last, macOS Monterey is released into the wild wild Web ready for us to download and run.

Some of you might want to create a usb-stick or some other drive with a bootable installer on it. That’s what I do, not only does it save time when I’m setting up a machine but it’s vital if you need to do it more than once.

So, once you have downloaded the installer on to your Mac and you have an external drive ready to make a bootable install on, here’s the command.

`sudo /Applications/Install\ macOS\ \Monterey.app/Contents/Resources/createinstallmedia --volume /Volumes/<volume name>`

Just replace <volume name> with your desired drive and let it run, once completed you can boot a Mac into safe mode and away you go.
