---
title: Introduction
order: 1
---

###What is it?
Good Tables is a Python package for validating tabular data through a processing pipeline.

It is built by Open Knowledge, with funding from the Open Data User Group. Good Tables is currently an alpha release.

Applications range from simple validation checks on CSV files, to integration with a larger ETL pipeline.

The codebase currently ships with two validators that can be used in a pipeline:

 * The StructureProcessor checks for common structural errors
 * The SchemaProcessor checks for conformance to a JSON Table Schema

There is a hook to add custom processors, and there are plans to include more processorss in the core library.

Good Tables ships with some documentation, but it is not yet complete. You are welcome to check out the code, run the tests (or check them on Travis), open an issue, or make a pull request to help us iterate to a version one release (here is the backlog).

We are also released some packages that are used in Good Tables: Good Tables Web, JTSKit, and TellMe. You can read more about each of these below.

###Why?

The development of Good Tables has been driven by a real-world pain point: monitoring and validating government spending data in the United Kingdom (the dashboard for this project is under development here). A brief overview of this use case can demonstrate the value proposition of Good Tables.

####The Problem
In the UK, various government departments publish spend data. This data is required to be accessible: that is, machine-readable and publicly available. Additionally, the data must conform to schema.

Monitoring the publication of such data, and validating its well-formedness, is a difficult task. The data is produced in a variety of circumstances (e.g.: available resources), and the producers of this data have no tools at hand to confirm that their work is correct.

Considering that spend data is produced at regular periodic intervals, and departments are expected to publish in a timely manner, the problem of producing well-formed data is compounded.

####The Solution
Good Tables provides part of the solution with tooling to ensure data is machine readable and well formed. All spend data across the various government departments is collected and run through a Goodl Tables pipeline at regular intervals.

The validation pipeline for this data is something like as follows:

 * Is the file readable as CSV?
 * Are there headers from the first line of the file?
 * Are there any empty headers, empty rows, or ragged rows?
 * Do all the values in the file conform with the expected schema (columns of numbers, dates, etc.)?

Any errors detected while the pipeline is running are written in to a report. When the pipeline finishes running, a user-facing report is generated, providing actionable data on what exactly is wrong with the file (so the data producers can take steps to fix such errors).

###How can I use it now?
If you are running Python 2.7, 3.3 or 3.4, you can start using Tabular Validator today.

As mentioned above, this is an alpha release. Still, we have decent test coverage, and we are hoping to uncover bugs and weirdness through wider usage.

Here’s how you can use Good Tables right now:

####In existing code bases
See some examples in the test suite to get a working idea of the API and how you could integrate a Good Tables pipeline, or stand-alone processor, into your existing workflow with tabular data.

####As a CLI
If you are doing data wrangling in the terminal, Good Tables comes with a CLI called “goodtables”. See here for the CLI interface,. This is still very much a work in progress, and currently exposes a subset of the Good Tables pipeline interface.

####Via the web
The Good Tables Web package provides both a Web API and a simple form UI over Good Tables. Read about the current API here.

###Extra goodies
Good Tables has been developed as part of a larger project, and we are pulling out functionality out into standalone packages as possible/practical.

Like the Good Tables package, these are all alpha releases, but each has a passing test suite on Python 2.7, 3.3, and 3.4.

###TellMe
TellMe is a Python package for creating user-facing reports from things happening in code. It is a simple library that provides a logger-like interface to build reports, and then generate them in several output formats.

###JTSKit
JTSKit is a Python package providing a set of utilities for working with JSON Table Schema.

###Good Tables Web
Good Tables Web is a flask application that provides a Web API over Good Tables, as well as a simple form UI.
