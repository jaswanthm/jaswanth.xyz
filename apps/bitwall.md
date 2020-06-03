---
layout: page
title: App - Bitwall
permalink: /bitwall
sidebar_link: true
---

### BitWall

I am an ardent fan of the things that can be achieved using CI/CD tools and the efficiency that it brings in app development process. In my decade long experience in the mobile app space, one thing that I've been very passionate about is to integrate CI/CD into the software development cycle. Starting from integrating it with requirements through to dev and testing and deployment, I've found it one of the best things to have it in any mobile app team. 

This drove me into developing a client and a wallboard (build status dashboard) for my current favourite - bitrise.io. I've written the same app using SwiftUI in iOS, Kotlin in android and react and reactnative platforms as well. Feel free to download it and use it.

##### BitWall - Android client 

<img src="/assets/images/bitwall-android-100.gif" width="240" height="480"/>

The idea behind creating an android client is to use the bitrise api to view the build status of every app, similar to our wallboard. But in addition to that, the ability to be able to download the build artifacts, in this case the apk file and install them straight on the device without having to use the web app to view get the link to the apps. The intention is to essentially create an artifact manager which will convert a task that takes at least 10 to 15 clicks into something that will only take 3 clicks. 

##### BitWall - iOS client 

<img src="/assets/images/bitwall-ios.gif" width="240" height="480"/>

The iOS version of the app is intended to perform the same functionality as the android one. But I used the iOS app as a chance to learn swiftUI. It was a really good experience, even the way swiftui enables testability in general. More information on my learnings are in the blog post I wrote about it. 

##### Bitrise Wallboard using React

![Bitwall React](/assets/images/bitwall-react.png)

The react app was built to use as a dashboard of all the apps, with the status of the last 5 builds. A red build number means the build has failed and green denotes a pass. 

<img src="/assets/images/bitwall-react-native.jpg" width="240" height="480"/>

And finally, I decided to reuse the react components in my react native app and build a similar app for mobile, but try and use as much of reusable code from the react wallboard app.
