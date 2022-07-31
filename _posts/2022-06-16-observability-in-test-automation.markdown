---
layout: post
title:  "Observability in Test Automation"
date:   2022-06-16 14:15:43 +1000
categories: Testing
image: assets/images/2.jpg
tags: Testing
excerpt_separator: <!--more-->
beforetoc: "I have recently started my journey with observability, specifically for test automation.."
toc: true

---

### Observability in Test Automation

I have recently started my journey with observability, specifically for test automation.

<!--more-->

Thanks to the wonderful Abby Bangser, I now have a much clearer understanding of the basics on Observability. Her recent course [Introduction to Observability for Test Automation](https://testautomationu.applitools.com/observability-for-test-automation/) has been a really good reference for me. 

So this helped me come up with a very curious idea.. Stay with me.. What if.. we could add observability to all the tests in a feature level. 

Lets say we are writing unit tests and integration tests for a `GET /user` endpoint. Instead of recording **every** test result in the preferred observability platform, I thought we could save some cost and record it at a **feature** level. 

So, the place where I got stuck was, how do we record this.. As a metric ? Or a structured log. I reached out to Abby, and she was a great support in helping me through this challenge. She recommending using Structured logs to record this. Although, her recommendation was to make sure the costs are calculated prior to make sure they are not through the roof. 

Here is a snippet of Abby's recommendation

> Now, if you are using a tool which allows test data, so something like structured logs or events, then you can track this much easier by either just tracking failing tests in a single field (which you can later parse out) OR tracking each test as a unique field with pass/fail status. I would imagine something like:

`````

{
msg: "test suite complete",
total_count: 100,
passed_count: 99,
failed_count: 1,
test_passed_results: {
  testVerifyFeatureOne: false,
  testVerifyFeatureTwo: true,
  ...
  }
}

`````

> If you are in world of logs/events where you can track this, then _hopefully_ your tool allows you to visualise as you need. 

The end goal is to use the observability platform as the central source of truth for all feature level test results and use our developer portal built on Backstage to be the UI that shows these results in a conceivable manner. 

## What is the value add here ? Why do we need this ?

We are building an enablement team at work, and trying to build a quailty dashboard that shows the current status of tests. By having something like this, teams can use it understand themselves on how a particular feature is tracking and which features seem to break regularly. 

This way we try to reduce developer `TOIL` by giving them a single quality dashboard to view the status of their tests

## Why not record build failures ?

Build failures seem to be something that doesn't tell the whole story. Yes a build failed, but tracking that provides less information on what to do next and most importantly, what to improve... So theres a lot of red, make them green ? That's not very helpful huh. That's been my thinking. 

Now that my braindump is complete, would love to see what other fellow testing nerds think about this. Is it worth the effort ?

## Tangent 

While I was researching on this, I found a tool that helps you perform testing purely based on observability data. 

Check it out.. Seems cool. https://github.com/kubeshop/tracetest