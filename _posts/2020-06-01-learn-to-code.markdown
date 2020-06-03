---
layout: post
title:  "Learning to code, to become a better Tester - a story."
date:   2020-06-01 14:15:43 +1000
categories: Testing
---
### Introduction

Dreamlab went through a major refactoring and performance improvement phase over the last few months, in preparation for the global rollout. The app added 14 new regions to its suite. As a part of it, the android app was refactored to conform to the latest best practices, the backend was performance tested and as a result went through a string of performance updates and finally the iOS app changed all its screen to SwiftUI. In this article I would like to share my experience in working on the iOS app and some of the challenges testing it, with emphasis on UI testing.

### The all new SwiftUI

SwiftUI was introduced during last years WWDC. It changed the way iOS apps were written. Therefore migrating to SwiftUI meant, the apps UI being rewritten. We also planned to rewriting our UI tests to make sure it covers the crucial parts, because our Visual Snapshot Tests covered most of the UI components in a very thorough way, so we didn't want the UI tests to have redundant test cases. 

But when I started writing UI tests for the new screens, I struggled a bit since I was used to the old Storyboard views and now having SwiftUI, I had to learn how to add accessibility ID to the right components so that I can make use of them when writing XCUI tests. 

I tried to just randomly search for concepts in SwiftUI when the need arose, but that wasn't helping me. I found it really time consuming to do simple things. Therefore I thought the best approach was to understand SwiftUI from the ground up. And the best way to do that in my opinion was to write an app using SwiftUI. 

### BitWall

Every time there is a need for me to come up with sample apps, I tend to write apps that would be useful for myself or my team on a daily basis. I chose to write a client app for bitrise.io since bitrise didn't have a simpler way to download builds quickly. I thought I could solve two problems at once. 

So first I completed the SwiftUI essentials course from Apple on a weekend. It was really interesting, since being a professional (ex-)android developer, this felt more similar to how android works. 

Then I jumped into bitrise's API and came up with a client app. 

<img src="/assets/images/bitwall-ios.gif" width="240" height="480"/>

### Some of my learnings, from a testing perspective are

Now that I knew how SwiftUI works and having written an app using it, I was able to come up with useful points that would help me write my UI tests better. 

#### Learnings 

#1 

The way swiftUI handles accessibility ID. 

```
Button(action: {}, label: { Text(“Submit”) }) 
        .accessibility(identifier: "button_submit")
```

#2

Making a view accessible. Most of the challenges when writing UI tests comes when writing tests for lists and scrollviews. BitWall app helped me understand the dynamics of it better. Most importantly how an item in a listview can be made accessible, since usually an item view is a combination of controls where all of them can be accessible. 

#3

Understanding the lifecycle of the app

#4

State injection 

#5 

Testability

### Conclusion

This is a very personalised experience for me. I am in no way saying that every tester should write his/her own app to be good at testing. What I've tried to establish here, is the way I see testing. I see it as a Gray box rather a black box. Understanding the native frameworks allowed me to come up with better ways to tackle UI testing. 